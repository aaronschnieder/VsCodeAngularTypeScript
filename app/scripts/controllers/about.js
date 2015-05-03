'use strict';

/**
 * @ngdoc function
 * @name vsCodeAngularTypeScriptApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the vsCodeAngularTypeScriptApp
 */
angular.module('vsCodeAngularTypeScriptApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
