export class UserModelService {
  constructor($q, lodash, userModel, $cookies, $state, $auth, $http, baseParams) {
    'ngInject'

    this.baseParams = baseParams;

    this.$q = $q;
    this.$state = $state;
    this.$http = $http;
    this.$auth = $auth;
    this.$cookies = $cookies;

    this.lodash = lodash;
    this.Model = userModel;

    this.collection = [];

    this.current = {};
  }

  login(token) {
    this.$cookies.put('_auth', token);
  }

  logout() {
    this.$cookies.put('_auth', '');
    this.$state.go('home');
  }

  authenticate(provider) {
    return this.$auth.authenticate(provider).then(res => {
      this.login(res);
      // console.log(res);
      // return this.$http({
      //   method: 'POST',
      //   url: this.baseParams.apiUrl + 'login',
      //   data: { fb_token: res.access_token }
      // }).then((response) => {
      //   this.login(response.data.auth_token);
      //   console.log(response);
      //   // this.login(res);
      // }, (response) => {
      //   console.log("Error", response);
      // });

    });
  }

  isLogin() {
    return this.$cookies.get('_auth');
  }
}
