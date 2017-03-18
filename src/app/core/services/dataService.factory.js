'use strict';

export default function(app) {
    app
      .factory('dataService', dataService);

    function dataService($log, httpService) {
      'ngInject';

      let service = {
        init: init
      }

      return service;

      function init() {
        $log.debug("heyyyyyyyyyyyyyyy World from dataservice");
        httpService.init();
      }
    }
}