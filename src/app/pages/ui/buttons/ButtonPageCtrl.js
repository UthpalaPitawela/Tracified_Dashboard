
(function () {
  'use strict';

  angular.module('TracifiedAdmin.pages.ui.buttons')
      .controller('ButtonPageCtrl', ButtonPageCtrl);

  /** @ngInject */
  function ButtonPageCtrl($scope, $timeout) {
    $scope.progressFunction = function() {
      return $timeout(function() {}, 3000);
    };
  }

})();
