export class LoginController {
  constructor(UserModelService, $state) {
    'ngInject';

    this.onInit();

    this.userModelService = UserModelService;
    this.$state = $state;
  }

  onInit() {
  }

  authenticate(provider) {
    this.userModelService.authenticate(provider).then(() => this.$state.go('main'));
  }
}
