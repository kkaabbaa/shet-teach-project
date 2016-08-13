export function config($logProvider, toastrConfig, $mdThemingProvider, localStorageServiceProvider, $authProvider) {
  'ngInject';

  // Enable log
  $logProvider.debugEnabled(true);

  // Set options third-party lib
  toastrConfig.allowHtml = true;
  toastrConfig.timeOut = 3000;
  toastrConfig.positionClass = 'toast-top-right';
  toastrConfig.preventDuplicates = true;
  toastrConfig.progressBar = true;

  // Material Theming
  $mdThemingProvider.theme('default')
      .primaryPalette('blue', {
        'default': '500',// by default use shade 400 from the pink palette for primary intentions
      });

  // LocalStorage config
  localStorageServiceProvider.setPrefix('mel-ui');

  // Satellizer config
  let configFacebook = {
    clientId: '599308166896542',
    responseType: 'token',
    // url: 'v1/user/auth',
    scope: 'email, publish_actions',
    scopeDelimiter: ',',
    display: 'popup'
  };

  switch (window.location.origin) {
    case 'http://mel-ui.2muchcoffee.com/':
      configFacebook.clientId = '1714346125481372';
      break;
    case 'http://localhost:3000':
      configFacebook.clientId = '1713561322226519';
      break;
  }

  $authProvider.facebook(configFacebook);

}
