document.addEventListener("DOMContentLoaded", function() {

    // ================= GET COOKIE FUNCTION =================
    // This function retrieves cookie data by cookie name

    function getCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i].trim();
            if (c.indexOf(nameEQ) == 0)
                return decodeURIComponent(
                  c.substring(nameEQ.length, c.length)
                );
        }
        return null;
    }

    // ================= GET ORDER HISTORY =================
    // Retrieve previous purchases from browser cookies
    const rawData = getCookie("nama_past_purchases");

    if (rawData) {
        try {

            // Convert JSON string into JavaScript object
            const history = JSON.parse(rawData);

            // Select container for displaying orders
            const listDiv = document.getElementById("orderHistoryList");
            if (history && history.length > 0) {

                // ================= GROUP ORDERS BY DATE =================
                // Products purchased on the same date will be grouped together

                const groupedOrders = history.reduce((acc, item) => {
                    if (!acc[item.date]) {acc[item.date] = [];}
                    acc[item.date].push(item);
                    return acc;
                }, {});
                
                let contentHtml = '';

                // ================= DISPLAY ORDERS =================
                // Loop through all grouped orders

                Object.keys(groupedOrders).reverse().forEach((date) => {
                    const items = groupedOrders[date];

                    // Generate random order ID
                    const randomID = Math.floor(100000 + Math.random() * 900000);

                    // Create HTML card for each order
                    contentHtml += `<div class="order-history-card">
                        <!-- Order number -->
                        <span class="order-id-display">🛒 Order #${randomID}</span>
                        <!-- Order metadata -->
                        <div class="meta-row">
                            <span class="status-capsule">Delivered Successfully</span>
                            <span class="static-date-text">${date}</span>
                        </div>
                        <!-- Purchased products list -->
                        <ul class="items-list-container">
                            ${items.map(i => `<li class="product-row-item">
                                <span style="margin-right:8px;">•</span>
                                ${i.name} (x${i.quantity})
                                </li>`).join('')}

                        </ul>
                        </div>`;});
                // Insert generated HTML into page
                listDiv.innerHTML = contentHtml;
            }
        } catch (err) {
            // Display error in browser console
            console.error("History Render Error:", err);
        }
    }
});