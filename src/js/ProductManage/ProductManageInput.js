import { localStorageManage } from "../util/functions.js";

export default class ProductManageInput {
	constructor({ newProduct, $productContainer, addNewProduct }) {
		this.newProduct = newProduct;
		this.$productContainer = $productContainer;

		this.$productContainer.addEventListener("submit", (e) => {
			e.preventDefault();
			let productName = e.currentTarget.querySelector("#product-name-input")
				.value;
			const productPrice = e.currentTarget.querySelector("#product-price-input")
				.valueAsNumber;
			const productQuantity = e.currentTarget.querySelector(
				"#product-quantity-input"
			).valueAsNumber;

			this.newProduct = {
				productName,
				productPrice,
				productQuantity,
			};
			const beforeProduct = localStorageManage.get("product") || [];
			console.log(beforeProduct);
			const sumProduct = [...beforeProduct, this.newProduct];
			addNewProduct(this.newProduct);
			localStorageManage.set("product", sumProduct);

      e.currentTarget.querySelector("#product-name-input").value = "";
			e.currentTarget.querySelector("#product-name-input").focus();
			e.currentTarget.querySelector("#product-price-input").value = "";
			e.currentTarget.querySelector("#product-quantity-input").value = "";
		});
	}
}
