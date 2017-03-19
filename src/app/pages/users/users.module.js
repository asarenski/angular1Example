'use strict';

import route from './users.route';
import './users.scss';

const usersPageModule = angular.module('users-module', [
  'ui.router'
]);

usersPageModule
    .config(route);

export default usersPageModule;
