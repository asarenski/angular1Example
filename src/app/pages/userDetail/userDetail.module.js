'use strict';

import route from './userDetail.route';

const userDetailPageModule = angular.module('user-detail-module', [
  'ui.router'
]);

userDetailPageModule
    .config(route);

export default userDetailPageModule;
