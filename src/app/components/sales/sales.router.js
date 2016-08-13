export function routerConfig($stateProvider) {
  'ngInject';

  $stateProvider
      .state('sales', {
        parent: 'main',
        url: '/seller/sales',
        controller: 'SalesController',
        controllerAs: 'vm',
        templateUrl: 'app/components/sales/sales.html'
      });
}
