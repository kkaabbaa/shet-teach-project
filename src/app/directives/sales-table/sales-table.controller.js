export class SalesTableController {
  constructor(SalesModelService) {
    'ngInject'

    this.salesModelService = SalesModelService;

    this.sales = [];
    this.selected = [];

    this.options = {
      rowSelection: true,
      multiSelect: true,
      autoSelect: true,
    };

    this.query = {
      order: 'customer.name',
      limit: 5,
      page: 1
    };

    this.onInit();
  }

  onInit() {
    this.sales = this.salesModelService.getSales();
  }

  loadSales() {
    this.promise = this.salesModelService.loadSales();
  }
}