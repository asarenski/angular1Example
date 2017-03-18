'use strict';

import route from './about.route';

const aboutPageModule = angular.module('about-module', [
  'ui.router'
]);

aboutPageModule
    .config(route);

export default aboutPageModule;
