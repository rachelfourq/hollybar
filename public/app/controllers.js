angular.module('DrinkCtrls', ['DrinkServices']).controller('DrinkCtrl', ['$scope', 'Drink', function($scope, Drink) {
    $scope.drinks = [];
    Drink.query(function success(data) {
        $scope.drinks = data;
    }, function error(data) {
        console.log(data);
    });
}]).controller("DrinkShowCtrl", ["$scope", "$routeParams", "Drink", function($scope, $routeParams, Drink) {
    Drink.get({
        id: $routeParams.id
    }, function success(data) {
        $scope.drink = data;
    }, function error(data) {
        console.log(data);
    });
}]).controller('NewDrinkCtrl', ['$scope', '$location', 'Drink',
    function($scope, $location, Drink) {
        $scope.name = '';
        $scope.alcohol = '';
        $scope.ingredients = [];
        $scope.amount = '';
        $scope.ingredient = '';
        $scope.newDrink = function() {
            var postData = {
                name: $scope.name,
                alcohol: $scope.alcohol,
                ingredients: [
                    {
                        amount: $scope.amount,
                        ingredient: $scope.ingredient
                    }
                ]
            };
            var newDrink = new Drink(postData);
            newDrink.$save();
            $location.path('/drinks')
        }
    }
]).controller('DrinkSearchCtrl', ['$scope', '$location', 'Drink',
    function($scope, $location, Drink) {
        $scope.resultDrinks = [];
        Drink.query(function success(data) {
            $scope.resultDrinks = data;
        }, function error(data) {
            console.log(data);
        });
        $scope.drinkSearch = function(search) {
            var filteredDrinks = [];
            $scope.drinks.forEach(function(drink) {
                if (drink.alcohol.toLowerCase().indexOf(search) > -1) {
                    filteredDrinks.push(drink)
                }
            })
            $scope.resultDrinks = filteredDrinks;
        }
    }
]);