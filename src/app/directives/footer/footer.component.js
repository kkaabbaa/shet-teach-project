import { FooterController } from './footerController';

export let FooterComponent = {
  templateUrl: 'app/directives/footer/footer.html',
  controller: FooterController,
  controllerAs: 'vm',
  bindings: {
    state: '@',
  }
};