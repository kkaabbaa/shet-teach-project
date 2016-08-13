import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import { routerConfig } from './login.router';

export let moduleName = 'loginModule';

angular.module(moduleName, [])
    .config(routerConfig)
    .service('loginService', LoginService)
    .controller('LoginController', LoginController);