'use strict';

function UsersController($log, $state, $sce, dataService) {
  'ngInject';

  const upCaret = "&#9650;";
  const downCaret = "&#9660;";

  let vm = this;

  vm.users = [];
  vm.orderByField = "registered";
  vm.reverseSort = true;

  dataService.getUsers().then((data) => {
    vm.users = data;
  }).catch((fault) => {
    $log.error("error getting the user data", fault);
  });

  vm.goToUserDetail = (guid) => {
    $state.go("userDetail", {guid: guid});
  }

  vm.sortByTimestamp = () => {
    vm.reverseSort = vm.reverseSort ? false : true;
  }

  vm.timestampSortingString = () => {
    let temp = "timestamp sorting ";
    vm.reverseSort? temp += upCaret : temp+= downCaret;
    return $sce.trustAsHtml(temp);
  }
}

export default UsersController;
