function searchProduct(){
  const name = document.querySelector(".admin-search-form input").value;
  if(name){
    window.location.href = "form.html?mode=edit&name=" + name;
  }
}