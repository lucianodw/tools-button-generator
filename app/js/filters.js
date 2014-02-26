'use strict';

/* App Module */

angular.module('wineCellarFilters', []).filter('favorite', function() {
    return function(input) {
        return input ? 'fa-heart' : 'fa-heart-o';
    };
});

angular.module('wineCellarFilter1', []).filter('notes', function() {
    return function(input) {
        return input ? 'fa-pencil-square-o' : 'fa-square-o';
    };
});

angular.module('paginationFilter', []).filter('offset', function() {
    return function(input, start) {
        start = parseInt(start, 10);
        return input.slice(start);
    };
});


angular.module('textFilter', []).filter('truncate', function() {
    return function(text, length, end) {
        if (isNaN(length))
            length = 10;

        if (end === undefined)
            end = "...";

        if (text.length <= length || text.length - end.length <= length) {
            return text;
        } else {
            return String(text).substring(0, length - end.length) + end;
        }

    };
});
