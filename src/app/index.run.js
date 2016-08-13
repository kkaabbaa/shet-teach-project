export function runBlock($rootScope, UserModelService, $state) {
  'ngInject';

  $rootScope.$on('$stateChangeStart',
      (event, toState) => {
        if (toState.name !== 'home' && !UserModelService.isLogin()) {
          event.preventDefault();
          $state.go('home');
        }

        if (toState.name === 'home' && UserModelService.isLogin()) {
          event.preventDefault();
          $state.go('dashboard');
        }
      });
}
