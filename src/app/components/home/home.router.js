export function routerConfig($stateProvider) {
  'ngInject';

  $stateProvider
      .state('home', {
        parent: 'main',
        url: '/',
        controller: 'HomeController',
        controllerAs: 'vm',
        templateUrl: 'app/components/home/home.html'
      });
}
