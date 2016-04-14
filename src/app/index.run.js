(function() {
  'use strict';

  angular
    .module('myChromeExtension')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
