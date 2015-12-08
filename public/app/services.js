angular.module('DrinkServices', ['ngResource']).factory('Drink', ['$resource', function($resource) {
    return $resource('http://localhost:3000/api/drinks/:id');
}]);