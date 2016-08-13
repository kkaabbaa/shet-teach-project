/* global moment:false, _:false */

// CONSTANTS //
import {} from './constants';

// CONFIGS //
import { config } from './index.config';
import { httpConfig } from './http.config';
import { routerConfig } from './index.route';

// RUNS //
import { runBlock } from './index.run';

// CONTROLLERS //
import { MainController } from './components/main/main.controller';

// SERVICES //
import {
    UserModelService,
    SalesModelService,
} from './services';

// DIRECTIVES //
import {
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    SalesTableComponent,
} from './directives/index';

// MODELS //
import {
    UserModel,
    SalesModel,
} from './models/index';

// MODULES //
import { loginModuleName } from './components/login/index'
import { salesModuleName } from './components/sales/index'
import { homeModuleName } from './components/home/index'
import { dashboardModuleName } from './components/dashboard/index'
import { signUpModuleName } from './components/sign-up/index'

// DECORATORS //
import {} from './decorators';

angular.module('mel-ui', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngMessages',
  'ngAria',
  'ngResource',
  'ui.router',
  'ngMaterial',
  'toastr',
  'LocalStorageModule',
  'envConst',
  'satellizer',
  'md.data.table',

  loginModuleName,
  salesModuleName,
  dashboardModuleName,
  homeModuleName,
  signUpModuleName,
])


// CONSTANTS
    .constant('lodash', _)
    .constant('moment', moment)

    // CONFIGS //
    .config(config)
    .config(httpConfig)
    .config(routerConfig)

    // RUNS //
    .run(runBlock)


    // CONTROLLERS //
    .controller('MainController', MainController)


    // SERVICES //
    .service('UserModelService', UserModelService)
    .service('SalesModelService', SalesModelService)


    // DIRECTIVES //
    .component('navbar', NavbarComponent)
    .component('header', HeaderComponent)
    .component('footer', FooterComponent)
    .component('salesTable', SalesTableComponent)
    // .component('sidebarMenu', SidebarMenuComponent)

    // MODELS //
    .factory('userModel', UserModel)
    .factory('salesModel', SalesModel);

// DECORATORS //
