'use strict';
angular.module('brandApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]).config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).when('/library', { templateUrl: 'views/library.html' }).otherwise({ redirectTo: '/' });
  }
]);
'use strict';
angular.module('brandApp').controller('MainCtrl', [
  '$scope',
  function ($scope) {
    $scope.button = {
      size: 'small',
      color: 'wsj-red',
      style: 'flat',
      text: 'Button Text'
    };
  }
]);