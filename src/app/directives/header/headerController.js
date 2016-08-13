export class HeaderController {
  constructor(UserModelService, $state) {
    'ngInject'

    this.userModelService = UserModelService;
    this.$state = $state;

    this.onInit();
  }

  onInit() {
  }
}