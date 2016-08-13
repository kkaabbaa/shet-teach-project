export class NavbarController {
  constructor(lodash, $state, UserModelService) {
    'ngInject'

    this.lodash = lodash;
    this.$state = $state;

    this.userModelService = UserModelService;

    this.onInit();
  }

  onInit() {
  }

  isLogin() {
    return this.userModelService.isLogin();
  }

  logout() {
    this.userModelService.logout();
  }

  login(provider) {
    this.userModelService.authenticate(provider).then(() => this.$state.reload());
  }
}