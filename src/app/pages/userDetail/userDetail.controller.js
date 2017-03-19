'use strict';

function UserDetailController($scope, $log, $stateParams, dataService) {
  'ngInject';

  let vm = this;
  vm.user = {};

  dataService.getUserByGuid($stateParams.guid)
  .then((user) => {
    vm.user = user;
  })
  .catch(() => {
    $log.error(`could not find user with guid ${$stateParams.guid}`)
  });
}

export default UserDetailController;
