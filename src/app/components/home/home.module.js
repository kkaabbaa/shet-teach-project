import { routerConfig } from './home.router';
import { HomeController } from './home.controller';

export let moduleName = 'homeModule';

angular.module(moduleName, [])
    .config(routerConfig)
    .controller('HomeController', HomeController);