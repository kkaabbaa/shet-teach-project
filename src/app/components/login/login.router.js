export function routerConfig($stateProvider) {
  'ngInject';

  $stateProvider
      .state('login', {
        parent: 'main',
        url: '/login',
        controller: 'LoginController',
        controllerAs: 'vm',
        templateUrl: 'app/components/login/login.html'
      });
}
