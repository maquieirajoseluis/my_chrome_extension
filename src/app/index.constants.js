/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('myChromeExtension')
    .constant('malarkey', malarkey)
    .constant('moment', moment);

})();
