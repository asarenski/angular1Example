'use strict';

import userDetailTpl from './userDetail.html';
import userDetailController from './userDetail.controller';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('userDetail', {
      url: '/users/:guid',
      templateUrl: userDetailTpl,
      controller: userDetailController,
      controllerAs: 'userDetailCtrl'
    });

}

export default routeConfig;
