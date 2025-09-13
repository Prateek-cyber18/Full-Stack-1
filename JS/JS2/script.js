const dropdown = document.getElementById("categoryFilter");
const products = document.querySelectorAll(".product");

dropdown.addEventListener("change", function () {
  const selectedCategory = this.value;

  products.forEach(product => {
    if (selectedCategory === "all" || product.dataset.category === selectedCategory) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
});
