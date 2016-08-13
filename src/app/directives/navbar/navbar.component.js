import { NavbarController } from './navbar.controller';

export let NavbarComponent = {
  templateUrl: 'app/directives/navbar/navbar.html',
  controller: NavbarController,
  controllerAs: 'vm',
  transclude: true,
  bindings: {
    state: '@',
  }
};
