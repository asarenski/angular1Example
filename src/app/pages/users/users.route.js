'use strict';

import usersTpl from './users.html';
import usersController from './users.controller';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('users', {
      url: '/users',
      templateUrl: usersTpl,
      controller: usersController,
      controllerAs: 'usersCtrl'
    });

}

export default routeConfig;
