import ProductManageApp from './ProductManage/ProductManageApp.js';

export default class App {
  constructor({
    product,
    $productManageMenu,
    $vendingMachineMenu,
    $productPurchaseMenu,
    $app,
  }) {
    this.product = product;
    this.$productManageMenu = $productManageMenu;
    this.$vendingMachineMenu = $vendingMachineMenu;
    this.$productPurchaseMenu = $productPurchaseMenu;
    this.$app = $app;

    console.log(this.product);
    this.$productManageMenu.addEventListener('click', (e) => {
      new ProductManageApp({
        product: this.product,
        $app: this.$app,
      });
    })

    this.$vendingMachineMenu.addEventListener('click', (e) => {

    });

    this.$productPurchaseMenu.addEventListener('click', (e) => {

    });
  }
}
