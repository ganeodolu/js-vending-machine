export default class App {
  constructor({
    $productManageMenu,
    $vendingMachineMenu,
    $productPurchaseMenu,
    $app,
  }) {
    this.$productManageMenu = $productManageMenu;
    this.$vendingMachineMenu = $vendingMachineMenu;
    this.$productPurchaseMenu = $productPurchaseMenu;
    this.$app = $app;

    this.$productManageMenu.addEventListener('click', (e) => {
      
    })
  }
}
