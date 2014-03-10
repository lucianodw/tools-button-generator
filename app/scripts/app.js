'use strict';

angular.module('brandApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/library', {
        templateUrl: 'views/library.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
