'use strict';

angular.module('brandApp')
  .controller('MainCtrl', function ($scope) {
    $scope.button = {
    	size: "small",
    	color: "wsj-red",
    	style: "flat",
    	text: "Button Text"
    }
  });
