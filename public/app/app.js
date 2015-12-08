var app = angular.module('DrinkApp', ['DrinkServices', 'DrinkCtrls', 'ngRoute', ]);
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/', {
        templateUrl: 'app/views/drinks.html'
    }).when('/about', {
        templateUrl: 'app/views/about.html'
    }).when("/drinks", {
        templateUrl: "app/views/all.html",
        controller: 'DrinkCtrl'
    }).when("/drinks/:id", {
        templateUrl: "app/views/show.html",
        controller: "DrinkShowCtrl"
    }).when("/new", {
        templateUrl: "app/views/add.html",
        controller: 'NewDrinkCtrl'
    }).when("/drink/search", {
        templateUrl: "app/views/search.html",
        controller: 'DrinkSearchCtrl'
    }).otherwise({
        templateUrl: 'app/views/404.html'
    });
    $locationProvider.html5Mode(true);
}]);