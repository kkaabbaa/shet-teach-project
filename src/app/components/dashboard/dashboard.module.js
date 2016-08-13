import { routerConfig } from './dashboard.router';
import { DashboardController } from './dashboard.controller';

export let moduleName = 'dashboardModule';

angular.module(moduleName, [])
    .config(routerConfig)
    .controller('DashboardController', DashboardController);