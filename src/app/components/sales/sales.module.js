import { routerConfig } from './sales.router';
import { SalesController } from './sales.controller';

export let moduleName = 'salesModule';

angular.module(moduleName, [])
    .config(routerConfig)
    .controller('SalesController', SalesController);