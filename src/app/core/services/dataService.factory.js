'use strict';

export default function(app) {
    app
      .factory('dataService', dataService);

    function dataService($log, $q, STUB_DATA) {
      'ngInject';

      let vm = this;
      vm.users = [];

      let service = {
        getUsers: getUsers,
        getUserByGuid: getUserByGuid
      }

      return service;

      function getUsers() {
        let deferred = $q.defer();
        if (vm.users.length === 0) {
          _get()
          .then((data) => {
            vm.users = data;
            deferred.resolve(vm.users);
          })
          .catch(() => deferred.reject());
        } else {
          deferred.resolve(vm.users);
        }
        return deferred.promise;
      }

      function _get() {
        let deferred = $q.defer();
        deferred.resolve(STUB_DATA.data);
        return deferred.promise;
      }

      function getUserByGuid(guid) {
        let deferred = $q.defer();
        getUsers().then(() => {
          let user = vm.users.find((u) => {
            return u.guid === guid;
          });
          if (user !== null && user !== undefined) {
            deferred.resolve(user);
          } else {
            deferred.reject();
          }
        });
        return deferred.promise;
      }
    }
}