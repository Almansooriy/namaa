// Product Data
const products = {
  "white-harmony-bouquet": {
    name: "White Harmony Bouquet",
    category: "Flowers • Bouquets",
    price: "95 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_1838.jpg",
    description: "A soft blend of white blooms creating a calm and elegant look."
  },
  "blush-bloom-bouquet": {
    name: "Blush Bloom Bouquet",
    category: "Flowers • Bouquets",
    price: "155 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_5567_1_.jpg",
    description: "Delicate pink tones arranged in a romantic and graceful style."
  },
  "autumn-glow-bouquet": {
    name: "Autumn Glow Bouquet",
    category: "Flowers • Bouquets",
    price: "245 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_2552_1_.jpg",
    description: "Warm seasonal flowers with rich tones inspired by autumn."
  },
  "lavender-harmony-bouquet": {
    name: "Lavender Harmony Bouquet",
    category: "Flowers • Bouquets",
    price: "158 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_5556_1_1_.jpg",
    description: "A soothing mix of soft purple and white flowers for a refined feel."
  },
  "pink-cloud-bouquet": {
    name: "Pink Cloud Bouquet",
    category: "Flowers • Bouquets",
    price: "227 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_4710_1_.jpg",
    description: "Light and airy pink blooms with a soft cloud-like appearance."
  },
  "fresh-garden-bouquet": {
    name: "Fresh Garden Bouquet",
    category: "Flowers • Bouquets",
    price: "197 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_4674_1_.jpg",
    description: "A fresh arrangement inspired by natural greenery and bright tones."
  },
  "rustic-flame-bouquet": {
    name: "Rustic Flame Bouquet",
    category: "Flowers • Bouquets",
    price: "317 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_0398_1_.jpg",
    description: "Bold red and orange tones with a warm rustic charm."
  },
  "sky-breeze-bouquet": {
    name: "Sky Breeze Bouquet",
    category: "Flowers • Bouquets",
    price: "280 SAR",
    image: "https://cdn.naseemsa.com/cache/436/0/naseem/catalog/product/d/s/dsc_1368_1_.jpg",
    description: "A refreshing mix of blue and white blooms inspired by the sky."
  },

  "sunlight-harmony-arrangement": {
    name: "Sunlight Harmony Arrangement",
    category: "Flowers • Arrangements",
    price: "248 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_4667_1_.jpg",
    description: "A bright blend of yellow and white blooms arranged to bring warmth and freshness."
  },
  "golden-autumn-luxe-arrangement": {
    name: "Golden Autumn Luxe Arrangement",
    category: "Flowers • Arrangements",
    price: "599 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_2120_1_.jpg",
    description: "A rich mix of warm tones designed in a luxurious autumn-inspired style."
  },
  "pure-elegance-arrangement": {
    name: "Pure Elegance Arrangement",
    category: "Flowers • Arrangements",
    price: "525 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/9/4/94b6248a-5a91-4691-9966-3f8af47d5e0f.jpg",
    description: "A clean and sophisticated arrangement featuring soft white blooms."
  },
  "blush-sky-arrangement": {
    name: "Blush Sky Arrangement",
    category: "Flowers • Arrangements",
    price: "349 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_9493_1_1_.jpg",
    description: "A delicate mix of pink and blue tones creating a calm and airy feel."
  },

  "red-anthurium-elegance-plant": {
    name: "Red Anthurium Elegance Plant",
    category: "Indoor Plants",
    price: "229 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/7/8/7847561f-8935-4e91-a862-1d21ba1dc387_1_.jpeg",
    description: "A vibrant red plant that adds a bold and elegant touch to any space."
  },
  "peace-lily-serenity-plant": {
    name: "Peace Lily Serenity Plant",
    category: "Indoor Plants",
    price: "149 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/0/8/081f611e-dceb-4338-b8f9-ec5b1fbbbd95_1_.jpeg",
    description: "A calming plant with soft white blooms, perfect for a peaceful atmosphere."
  },
  "white-anthurium-serenity-plant": {
    name: "White Anthurium Serenity Plant",
    category: "Indoor Plants",
    price: "220 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_1788_1_.jpg",
    description: "A clean and minimal white plant that brings elegance and simplicity."
  },
  "blue-orchid-elegance-plant": {
    name: "Blue Orchid Elegance Plant",
    category: "Indoor Plants",
    price: "265 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_1841_1_.jpg",
    description: "A unique blue orchid that adds a luxurious and refined touch."
  },
  "white-orchid-elegance-plant": {
    name: "White Orchid Elegance Plant",
    category: "Indoor Plants",
    price: "230 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_1796_1_.jpg",
    description: "An elegant white orchid that enhances modern and minimal interiors."
  },
  "red-anthurium-luxe-plant": {
    name: "Red Anthurium Luxe Plant",
    category: "Indoor Plants",
    price: "280 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_1671_1_.jpg",
    description: "A premium red plant with a bold look, perfect for statement decor."
  },
  "peace-lily-warm-elegance-plant": {
    name: "Peace Lily Warm Elegance Plant",
    category: "Indoor Plants",
    price: "210 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_1745_1_.jpg",
    description: "A warm-toned plant that combines natural beauty with cozy elegance."
  },
  "white-anthurium-luxe-plant": {
    name: "White Anthurium Luxe Plant",
    category: "Indoor Plants",
    price: "240 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_1676_1_1_.jpg",
    description: "A luxurious white plant designed to elevate any interior space."
  },

  "crimson-luxe-box-arrangement": {
    name: "Crimson Luxe Box Arrangement",
    category: "Gift Packages",
    price: "310 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_6260.jpg",
    description: "A bold red arrangement presented in a luxurious box for a striking gift."
  },
  "golden-bloom-coffee-luxe-arrangement": {
    name: "Golden Bloom & Coffee Luxe Arrangement",
    category: "Gift Packages",
    price: "565 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_2640_1_1_.jpg",
    description: "A premium floral arrangement paired with coffee for a warm and refined experience."
  },
  "blush-treat-gift-box": {
    name: "Blush Treat Gift Box",
    category: "Gift Packages",
    price: "198 SAR",
    image: "https://cdn.naseemsa.com/cache/528/0/naseem/catalog/product/d/s/dsc_4763_1_.jpg",
    description: "A soft pink floral gift set complemented with sweet chocolate treats."
  }
};

// Get product from URL
const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const product = products[id];

// Elements
const nameEl = document.getElementById("productName");
const categoryEl = document.getElementById("productCategory");
const priceEl = document.getElementById("productPrice");
const descEl = document.getElementById("productDescription");
const imgEl = document.getElementById("productImage");

// Display
if (product) {
  nameEl.textContent = product.name;
  categoryEl.textContent = product.category;
  priceEl.textContent = product.price;
  descEl.textContent = product.description;
  imgEl.src = product.image;
  imgEl.alt = product.name;
} else {
  nameEl.textContent = "Product not found";
  categoryEl.textContent = "";
  priceEl.textContent = "";
  descEl.textContent = "The selected product could not be loaded.";
  imgEl.style.display = "none";
}