/**
 * @author v.lugovsky
 * created on 10.12.2017
 */
(function () {
  'use strict';

  angular.module('TracifiedAdmin.theme.inputs')
      .directive('baSwitcher', baSwitcher);

  /** @ngInject */
  function baSwitcher() {
    return {
      templateUrl: 'app/theme/inputs/baSwitcher/baSwitcher.html',
      scope: {
        switcherStyle: '@',
        switcherValue: '='
      }
    };
  }

})();
