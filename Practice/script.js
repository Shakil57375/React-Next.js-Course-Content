const price = document.getElementById("product_price");
const total = document.getElementById("total_price");
const button = document.getElementById("btn");
const productPrice = 30;
let totalPrice = 0;
price.innerText = `$ ${productPrice}`;
total.innerText = "Total Price : $ 0";

button.addEventListener("click", () => {
  totalPrice = totalPrice + productPrice;
  total.innerText = `Total Price : ${totalPrice}`;
});
