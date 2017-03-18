'use strict';

import headerTpl from './header.html';

function headerComponent($log) {
	'ngInject';

  var directive = {
    restrict: 'E',
    templateUrl: headerTpl,
    controller: HeaderController,
    controllerAs: 'headerController',
    bindToController: true
  };

  return directive;

  function HeaderController () {
	  $log.debug('Hello from the header controller!');
    this.routes = [
      {
        name: 'HOME',
        target: 'main'
      },
      {
        name: 'USERS',
        target: 'users'
      },
      {
        name: 'ABOUT',
        target: 'about'
      }
    ];
  }

}

export default headerComponent;
