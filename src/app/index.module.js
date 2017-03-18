'use strict';

import components from './index.components';
import config from './index.config';
import run from './index.run';

import uiRouter from 'angular-ui-router';

import coreModule from './core/core.module';
import indexComponents from './index.components';
import indexRoutes from './index.routes';
import mainModule from './pages/main/main.module';
import usersModule from './pages/users/users.module';
import aboutModule from './pages/about/about.module';

const App = angular.module(
  "myNgApp", [
    // plugins
    uiRouter,
    "ngSanitize",

    // core
    coreModule.name,

    // components
    indexComponents.name,

    // routes
    indexRoutes.name,

    // pages
    mainModule.name,
    usersModule.name,
    aboutModule.name

  ]
);

App
  .config(config)
  .run(run);



export default App;
