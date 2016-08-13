import { routerConfig } from './sing-up.router';
import { SignUpController } from './sing-up.controller';

export let moduleName = 'signUpModule';

angular.module(moduleName, [])
    .config(routerConfig)
    .controller('SignUpController', SignUpController)