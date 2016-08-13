export function routerConfig($stateProvider) {
  'ngInject';

  $stateProvider
      .state('dashboard', {
        parent: 'main',
        url: '/dashboard',
        controller: 'DashboardController',
        controllerAs: 'vm',
        templateUrl: 'app/components/dashboard/dashboard.html',
        resolve: {}
      });
}
