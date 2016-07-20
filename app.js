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
            });
    }

    $scope.addBoughtItem = function (x) {
        x.numBought = parseInt(x.numBought) + 1;
        x.totalCost = parseInt(x.numBought) * parseInt(x.price);
    };

    $scope.subtractBoughtItem = function (x) {
        if (x.numBought > 1){
            x.numBought = parseInt(x.numBought) - 1;
        }
        x.totalCost = parseInt(x.numBought) * parseInt(x.price);
    };

    $scope.subtractBoughtItemDashboard = function (x) {
        if (x.numBought > 0) {
            x.numBought = parseInt(x.numBought) - 1;
        }
    };

        $scope.deleteBoughtItem = function (x) {
        x.numBought = 0;
    }

    $scope.sum = function (property) {
        //function that sums up all values of a certain property in arr that holds multiple objects
        var arr = $scope.products;
        if (arr && arr.hasOwnProperty(length)){
            var retNum = 0;
            for (var i = 0; i < arr.length; i++){
                if (arr[i].hasOwnProperty(property)){
                    retNum += parseInt(arr[i][property]);
                }
            }
            return retNum;
        }
        return 0;
    }

});
