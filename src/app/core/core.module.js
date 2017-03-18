'use strict';

const shared = angular.module('core.shared', []);

import validationTestDirective from './directives/validation-test/validation-test.directive';

import constants from './services/constants';
import storeFactory from './services/store.factory';
import resolverProvider from './services/resolver.provider';
import dataService from './services/dataService.factory';

validationTestDirective(shared);

constants(shared);
storeFactory(shared);
resolverProvider(shared);
dataService(shared);

export default shared;
