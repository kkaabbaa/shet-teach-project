import { SALES } from '../models/mock-sales.js';

export class SalesModelService {
  constructor($q, $timeout, $http, baseParams, salesModel) {
    'ngInject'

    this.$q = $q;
    this.$timeout = $timeout;
    this.$http = $http;
    this.baseParams = baseParams;
    this.Model = salesModel;

    this.sales = [];
  }

  getSales() {
    if (!this.sales.length) {
      this.sales = SALES;
    }

    return this.sales;
  }

  loadSales() {
    // return this.$timeout(function () {
    //   // load

    return this.Model.get().$promise.then((res) => {
      console.log(res);
    });

    // return this.$http({
    //   method: 'GET',
    //   url: this.baseParams.apiUrl + '/sales',
    // }).then((response) => {
    //   console.log(response);
    // }, (response) => {
    //   console.log("Error", response);
    // });
  }
}