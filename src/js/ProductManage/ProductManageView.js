export default class ProductManageView {
	constructor({ product, $productInventoryContainer }) {
		this.product = product;
		this.$productInventoryContainer = $productInventoryContainer;
		console.log(this.product);
	}

	render() {
		// array시
		// const template = this.product.length > 0 ? this.product.map((val) => {
		//   const { productName, productPrice, productQuantity } = val;

		//   return /*html*/ `
		// 						<tr>
		// 							<td>${productName}</td>
		// 							<td>${productPrice}</td>
		// 							<td>${productQuantity}</td>
		// 						</tr>
		// 					`;
		// }).join('') : '';

		// 프로덕트 한개
		const template = () => {
			const { productName, productPrice, productQuantity } = this.product;
      console.log(productName);
			return /*html*/ `
        <tr>
          <td>${productName}</td>
          <td>${productPrice}</td>
          <td>${productQuantity}</td>
        </tr>
      `;
		};
		this.$productInventoryContainer.insertAdjacentHTML("beforeend", template());
	}

  setState(nextProduct) {
    this.product = nextProduct;
    this.render();
  }
}
