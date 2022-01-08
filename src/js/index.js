import App from './App.js';
import { localStorageManage } from "./util/functions.js";

// const product = JSON.parse(localStorage.getItem("product")) || [];
const product = localStorageManage.get("product") || [];
console.log(product)

new App({
  product,
  $productManageMenu: document.querySelector("#product-manage-menu"),
  $vendingMachineMenu: document.querySelector("#vending-machine-manage-menu"),
  $productPurchaseMenu: document.querySelector("#product-purchase-menu"),
  $app: document.querySelector("#app"),
});
