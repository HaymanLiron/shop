/**
 * Created by itc_user on 7/18/2016.
 */


var app = angular.module("shopApp", ['ngRoute'])
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
            .when('/individualProduct', {
                templateUrl: 'partials/individualProduct.html',
                controller: 'mainController'
            });
    });

app.controller("mainController", function ($scope, $http) {

    if (!($scope.products)){ //only do an HTTP request if it's the first time calling the function
        $http.get("https://api.myjson.com/bins/1j3ft")
            .then(function (response) {
                $scope.products = response.data['storeItems'];
                console.log($scope.products);
            });
    }

    $scope.addBoughtItem = function (x) {
        x['numBought'] = parseInt(x['numBought']) + 1;
        x['totalCost'] = parseInt(x['numBought']) * parseInt(x['price']);
        console.log($scope.products[0].numBought);
        console.log(x.numBought);
    };


});
