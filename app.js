/**
 * Created by itc_user on 7/18/2016.
 */
storeItems = [
    {
        name: 'Samsung Galaxy S6',
        price: '$400',
        image: './images/galaxyS6.png'
    },
    {
        name: 'iPhone 6',
        price: '$700',
        image: './images/iphone6.jpg'
    },
    {
        name: 'Samsung Galaxy S6',
        price: '$400',
        image: './images/galaxyS6.png'
    },
    {
        name: 'iPhone 6',
        price: '$700',
        image: './images/iphone6.jpg'
    },
    {
        name: 'Samsung Galaxy S6',
        price: '$400',
        image: './images/galaxyS6.png'
    },
    {
        name: 'iPhone 6',
        price: '$700',
        image: './images/iphone6.jpg'
    }
];


var app = angular.module("shopApp", ['ngRoute'])
    .config( function($routeProvider) {
        $routeProvider
        //route for the home page
            .when('/', {
                templateUrl: 'partials/view2.html',
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
});