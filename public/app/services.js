angular.module('DrinkServices', ['ngResource']).factory('Drink', ['$resource', "$routeParams", function($resource, $routeParams) {
    return $resource('http://localhost:3000/api/drinks/:id/ingredients', {}, {
    	saveIngredients: {method: 'POST'}
    });
}]);