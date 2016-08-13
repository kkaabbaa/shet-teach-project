import { SalesTableController } from './sales-table.controller';

export let SalesTableComponent = {
  templateUrl: 'app/directives/sales-table/sales-table.html',
  controller: SalesTableController,
  controllerAs: 'vm',
  transclude: true,
  bindings: {
    state: '@',
  }
};
