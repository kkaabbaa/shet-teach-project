import { HeaderController } from './headerController';

export let HeaderComponent = {
  templateUrl: 'app/directives/header/header.html',
  controller: HeaderController,
  controllerAs: 'vm',
  bindings: {
    state: '@',
  }
};