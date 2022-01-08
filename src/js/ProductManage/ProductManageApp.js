import ProductManageInput from "./ProductManageInput.js";
import ProductManageView from "./ProductManageView.js";

export default class ProductManageApp {
	constructor({ product, $app }) {
		this.product = product;
		this.$app = $app;
		console.log(this.product)
		this.render();

		this.productManageInput = new ProductManageInput({
			newProduct: [],
			$productContainer: document.querySelector(".product-container"),
			addNewProduct: (newProduct) => {
				this.productManageView.setState(newProduct);
			}
		});

		this.productManageView = new ProductManageView({
			product: this.product,
			$productInventoryContainer: document.querySelector("#product-inventory-container"),
		});
	}

	render() {
		this.$app.innerHTML = /*html*/`
    <section>
				<h3>상품 추가하기</h3>
				<form class="product-container">
					<input type="text" id="product-name-input" placeholder="상품명" required />
					<input type="number" id="product-price-input" placeholder="가격" min="100" step="10" required />
					<input type="number" id="product-quantity-input" placeholder="수량" min="1" required />
					<button type="submit" id="product-add-button">추가하기</button>
				</form>
				<table class="product-inventory">
					<colgroup>
						<col style="width: 140px" />
						<col style="width: 100px" />
						<col style="width: 100px" />
					</colgroup>
					<thead>
						<tr>
							<th>상품명</th>
							<th>가격</th>
							<th>수량</th>
						</tr>
					</thead>
					<tbody id="product-inventory-container">
						${this.product.length > 0 ? this.product.map((val) => {
      const { productName, productPrice, productQuantity } = val;
							console.log(name, val);
							return /*html*/ `
								<tr>
									<td>${productName}</td>
									<td>${productPrice}</td>
									<td>${productQuantity}</td>
								</tr>
							`;
						}).join('') : ''}
					</tbody>
				</table>
			</section>`;
	}

	setState() {

	}
}
