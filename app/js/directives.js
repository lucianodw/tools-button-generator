/* App Module */

angular.module('components', []).directive('starRating', function() {
    return {
        restrict: 'A',
        template: '<ul class="rating">' +
            '<li ng-repeat="star in stars" class="filled">' +
            '\u2605' +
            '</li>' +
            '</ul>',
        scope: {
            ratingValue: '='
        },
        link: function(scope, elem, attrs) {
            scope.stars = [];
            for (var i = 0; i < scope.ratingValue; i++) {
                scope.stars.push({});
            }
        }
    }
});

angular.module('cart', []).directive('shoppingCart', function() {
    return {
        replace: true,
        restrict: 'EACM',
        template: '<span class="case-builder">{{12 - cartItems.length}} slots</span>'

    }
});
