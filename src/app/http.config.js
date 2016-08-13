export function httpConfig($httpProvider) {
  'ngInject';

  $httpProvider.interceptors.push(Interceptor);
}

function Interceptor($q, localStorageService, $cookies) {
  'ngInject';

  return {
    request: function (config) {
      if (config.url.search(/\/api\//) + 1) {
        config.headers.Authorization = $cookies.get('_auth') ? $cookies.get('_auth') : '';
      }
      return config;
    },
    requestError: function (rejection) {
      return $q.reject(rejection);
    },
    response: function (response) {
      return response;
    },
    responseError: function (rejection) {
      return $q.reject(rejection);
    }
  };
}