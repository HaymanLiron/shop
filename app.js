/**
 * Created by itc_user on 7/18/2016.
 */
(function () {
    angular.module("shopApp", ['ngRoute'])
        .config(function ($routeProvider) {
            $routeProvider
            //route for the home page
                .when('/', {
                    templateUrl: 'partials/dashboard.html',
                    controller: 'mainController'
                })
                //route for the dashboard
                .when('/dashboard', {
                    templateUrl: 'partials/dashboard.html',
                    controller: 'mainController'
                })
                //route for the cart
                .when('/cart', {
                    templateUrl: 'partials/cart.html',
                    controller: 'mainController'
                })
                //route for individual products
                .when('/individualProduct/:prodId', {
                    templateUrl: 'partials/individualProduct.html',
                    controller: 'mainController'
                });
        });
})();
