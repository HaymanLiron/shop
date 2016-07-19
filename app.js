/**
 * Created by itc_user on 7/18/2016.
 */
storeItems = [
    {
        name: 'Samsung Galaxy S6',
        productID: '123456',
        price: '$400',
        image: './images/galaxyS6.png',
        description: 'State of the art from Samsung',
        numBought: '3'
    },
    {
        name: 'iPhone 6',
        productID: '987654',
        price: '$700',
        image: './images/iphone6.jpg',
        description: 'Double the price of any other phone on the market, must be worth it',
        numBought: '0'
    }
];


var app = angular.module("shopApp", ['ngRoute'])
    .config( function($routeProvider) {
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

app.controller("mainController", function ($scope) {
    $scope.products = storeItems;

    $scope.addBoughtItem = function(x) {
        console.log(parseInt(x.numBought));
        x.numBought = parseInt(x.numBought) + 1;


    };
});
