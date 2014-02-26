'use strict';

/* Controllers */

var wineCellarControllers = angular.module('wineCellarControllers', []);

wineCellarControllers.controller('wineCellar', ['$scope', '$http', '$routeParams', 'localStorageService',

    function($scope, $http, $routeParams, localStorageService) {
        $http.get('js/data/wine_list.json').success(function(data) {
            $scope.wines = data;
        });

        $scope.filters = {};
        $scope.orderProp = 'Vintage';


        $scope.toggleFavorite = function($event, className) {
            $($event.target).toggleClass(className);
            var itemCode = $($event.target).attr('data-item');
            var text = $($event.target).text();
            $scope.favorites = localStorageService.get(itemCode);
            console.log($scope.favorites);
            if ($scope.favorites == 'favorite-true') {
                //console.log($scope.favorites);
                localStorageService.add(itemCode, 'favorite-false');

                $($event.target).text(' Remove Favorite');
            } else {
                localStorageService.add(itemCode, 'favorite-true');
                $($event.target).text(' Add Favorite');

            }

        };

        $scope.showQuickPreview = function() {
            //$('#testModal').foundation('reveal', 'open');
            $('#modal-0').foundation('reveal', 'open');
        }

        $scope.showReviewModal = function() {
            //$('#testModal').foundation('reveal', 'open');
            $('#modal-1').foundation('reveal', 'open');
        }


        $scope.itemsPerPage = 15;
        $scope.currentPage = 0;

        $scope.range = function() {
            var rangeSize = 2;
            var ret = [];
            var start;

            start = $scope.currentPage;
            if (start > $scope.pageCount() - rangeSize) {
                start = $scope.pageCount() - rangeSize;
            }

            for (var i = start; i < start + rangeSize; i++) {
                ret.push(i);
            }
            return ret;
        };

        $scope.prevPage = function() {
            if ($scope.currentPage > 0) {
                $scope.currentPage--;
            }
        };

        $scope.prevPageDisabled = function() {
            return $scope.currentPage === 0 ? "disabled" : "";
        };

        $scope.pageCount = function() {
            return Math.ceil($scope.wines.length / $scope.itemsPerPage) - 1;
        };

        $scope.nextPage = function() {
            if ($scope.currentPage < $scope.pageCount()) {
                $scope.currentPage++;
            }
        };

        $scope.nextPageDisabled = function() {
            return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
        };

        $scope.setPage = function(n) {
            $scope.currentPage = n;
            console.log(n);
        };

        $scope.filter_param = $routeParams.filterName;

    }


]);

wineCellarControllers.controller('dashboard', ['$scope', '$http', '$routeParams', 'localStorageService',

    function($scope, $http, $routeParams, localStorageService) {
        $http.get('js/data/wine_list.json').success(function(data) {
            $scope.wines = data;
        });

        $scope.filters = {};
        $scope.orderProp = 'Vintage';


        $scope.toggleFavorite = function($event, className) {
            $($event.target).toggleClass(className);
            var itemCode = $($event.target).attr('data-item');
            //console.log(itemCode);
            $scope.favorites = localStorageService.get(itemCode);
            console.log($scope.favorites);
            if ($scope.favorites == 'favorite-true') {
                //console.log($scope.favorites);
                localStorageService.add(itemCode, 'favorite-false');
            } else {
                localStorageService.add(itemCode, 'favorite-true');

            }

        };

        $scope.showQuickPreview = function() {
            //$('#testModal').foundation('reveal', 'open');
            $('#modal-0').foundation('reveal', 'open');
        }


    }


]);

wineCellarControllers.controller('caseBuilder', ['$scope', '$http', '$routeParams', 'localStorageService',

    function($scope, $http, $routeParams, localStorageService) {
        $http.get('js/data/case_builder.json').success(function(data) {
            $scope.wines = data;
            console.log('loaded');

        });

        $scope.filters = {};
        $scope.orderProp = '-cart';

        $scope.toggleFavorite = function($event, className) {
            $($event.target).toggleClass(className);
            var itemCode = $($event.target).attr('data-item');
            $scope.favorites = localStorageService.get(itemCode);
            console.log($scope.favorites);
            if ($scope.favorites == 'favorite-true') {
                localStorageService.add(itemCode, 'favorite-false');
            } else {
                localStorageService.add(itemCode, 'favorite-true');

            }
        };

        $scope.toggleWine = function($event, skuSalePrice, skuListPrice) {
            console.log('checked!');
            $($event.target).parent().parent().toggleClass('cart-false');
            var text = $($event.target).next().text();
            if (text == 'In Case') {
                var text = $($event.target).next().text('Add to Case');
                $scope.removeItem('wine', skuSalePrice, skuListPrice);
            } else {
                var text = $($event.target).next().text('In Case');
                $scope.addItem('wine', skuSalePrice, skuListPrice);

            }
        }

        $scope.showPreviewWine = function($event) {
            console.log('show preview wine!');
            $($event.target).find('.wine-preview').show();
        }

        $scope.hidePreviewWine = function($event) {
            console.log('hide preview wine!');
            $('.wine-preview').hide();
        }

        $scope.showQuickPreview = function() {
            //$('#testModal').foundation('reveal', 'open');
            $('#modal-0').foundation('reveal', 'open');
        }

        $scope.addWineCart = function(skuSalePrice, skuListPrice) {
            $scope.addItem('d', skuSalePrice, skuListPrice);
        }

        $scope.cartItems = [];

        $scope.addItem = function(title, price, listPrice) {
            var objAdded = {
                title: title,
                price: price,
                listPrice: listPrice
            };
            $scope.cartItems.push(objAdded);
            console.log($scope.cartItems);
        }

        $scope.removeItem = function(index) {
            $scope.cartItems.splice(index, 1);
        },

        $scope.total = function() {
            var total = 0;
            angular.forEach($scope.cartItems, function(item) {
                total += 1 * item.price;
            })

            return total;
        }

        $scope.savings = function() {
            var savings = 0;
            angular.forEach($scope.cartItems, function(item) {

                savings += item.listPrice - item.price;
            })
            console.log(savings);
            return savings;
        }


    }


]);

wineCellarControllers.controller('caseBuilderReset', ['$scope', '$http', '$routeParams', 'localStorageService',

    function($scope, $http, $routeParams, localStorageService) {
        $http.get('js/data/case_builder_reset.json').success(function(data) {
            $scope.wines = data;

        });

        $scope.filters = {};
        $scope.orderProp = '-cart';

        $scope.toggleFavorite = function($event, className) {
            $($event.target).toggleClass(className);
            var itemCode = $($event.target).attr('data-item');
            //console.log(itemCode);
            $scope.favorites = localStorageService.get(itemCode);
            console.log($scope.favorites);
            if ($scope.favorites == 'favorite-true') {
                //console.log($scope.favorites);
                localStorageService.add(itemCode, 'favorite-false');
            } else {
                localStorageService.add(itemCode, 'favorite-true');

            }
        };

        $scope.toggleWine = function($event) {
            //$($event.target).toggleClass(className);
            console.log('checked!');
            $($event.target).parent().parent().toggleClass('cart-false');
            var text = $($event.target).next().text();
            if (text == 'In Cart') {
                var text = $($event.target).next().text('Add to Cart');
            } else {
                var text = $($event.target).next().text('In Cart');
            }
        }


    }


]);

wineCellarControllers.controller('productDetail', ['$scope', '$http', '$routeParams', 'localStorageService',

    function($scope, $http, $routeParams) {

        $scope.showReviewModal = function() {
            $('#modal-product-review').foundation('reveal', 'open');
        }
    }


]);

wineCellarControllers.controller('caseBuilderCart', ['$scope',
    function($scope) {
        // $http.get('/js/data/cart.json').success(function(data) {
        //    $scope.cart = data;
        // });

        $scope.cartItems = [];

        $scope.buyItem = function(title, price) {
            var objAdded = {
                title: title,
                price: price
            };
            $scope.cartItems.push(objAdded);
        }

        $scope.addToCart = function(t, p) {
            var mainScope = angular.element("#sidebar-case-builder").scope();
            mainScope.buyItem(t, p);
            return false;
        };


        $scope.total = function() {
            var total = 0;
            angular.forEach($scope.cartItems.items, function(item) {
                total += item.quantity * item.price;
            })

            return total;
        }

        //$scope.orderProp = 'price';
    }
]);
