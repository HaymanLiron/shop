/**
 * Created by itc_user on 7/17/2016.
 */


app.controller("namesData", function ($scope, stringValue) {
    $scope.names = ['liron', 'michi', 'ilan', 'noam'];
    console.log(stringValue);
});

app.controller("anotherController", function ($scope, myService) {
    myService.printHi();
});