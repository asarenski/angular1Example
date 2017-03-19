'use strict';

function UsersController($log, $state, dataService) {
  'ngInject';

  let vm = this;

  vm.users = [];

  dataService.getUsers().then((data) => {
    vm.users = data;
  }).catch((fault) => {
    $log.error("error getting the user data", fault);
  });

  vm.goToUserDetail = (guid) => {
    $state.go("userDetail", {guid: guid});
  }
}

export default UsersController;
