'use strict';

import aboutTpl from './about.html';
import aboutController from './about.controller';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('about', {
      url: '/about',
      templateUrl: aboutTpl,
      controller: aboutController,
      controllerAs: 'about'
    });

}

export default routeConfig;
