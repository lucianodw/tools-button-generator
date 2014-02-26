'use strict';

/* App Module */

var app = angular.module('wineCellarApp', [
    'wineCellarControllers',
    'components',
    'cart',
    'ngRoute',
    'wineCellarFilters',
    'wineCellarFilter1',
    'paginationFilter',
    'textFilter',
    'LocalStorageModule'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/wine-list', {
            templateUrl: 'views/wine_list.html',
            controller: 'wineCellar'
        }).
        when('/wine-list/:filterName', {
            templateUrl: 'views/wine_list.html',
            controller: 'wineCellar'
        }).
        when('/wine-grid', {
            templateUrl: 'views/wine_grid.html',
            controller: 'wineCellar'
        }).
        when('/wine-grid/:filterName', {
            templateUrl: 'views/wine_grid.html',
            controller: 'wineCellar'
        }).
        otherwise({
            redirectTo: '/wine-list'
        });
    }
]);
