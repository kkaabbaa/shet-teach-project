export function routerConfig($stateProvider) {
  'ngInject';

  $stateProvider
      .state('signUp', {
        parent: 'main',
        url: '/signup',
        templateUrl: 'app/components/sign-up/sing-up.html',
        controller: 'SignUpController',
        controllerAs: 'vm'
      });
}
