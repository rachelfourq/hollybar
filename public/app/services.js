angular.module('DrinkServices', ['ngResource']).factory('Ingredients', ['$resource', "$routeParams", function($resource, $routeParams) {
    return $resource('/api/drinks/:id/ingredients', {}, {
    	saveIngredients: {method: 'POST'}
    });
}]).factory('Drink', ['$resource', "$routeParams", function($resource, $routeParams) {
    return $resource('/api/drinks/:id');
}]);