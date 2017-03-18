'use strict';

import  _ from 'lodash/core';
import moment from 'moment';

function UsersController($log, dataService, httpService) {
  'ngInject';

  $log.debug('Hello from UsersController controller!');

  this.someProp = "some users property";

  dataService.init();
}

export default UsersController;
