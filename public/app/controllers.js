angular.module('DrinkCtrls', ['DrinkServices']).controller('DrinkCtrl', ['$scope', 'Drink', function($scope, Drink) {
    $scope.drinks = [];
    Drink.query(function success(data) {
        console.log(data);
        $scope.drinks = data;
    }, function error(data) {
        console.log(data);
    });
}]).controller("DrinkShowCtrl", ["$scope", "$routeParams", '$location', "Drink", "Ingredients", function($scope, $routeParams, $location, Drink, Ingredients) {
    Drink.get({
        id: $routeParams.id
    }, function success(data) {
        $scope.drink = data;
        $scope.amount = '';
        $scope.ingredient = '';
        $scope.addIngredients = function() {
            var ingredientObj = {amount: $scope.amount, ingredient: $scope.ingredient};
            Ingredients.saveIngredients({id: $scope.drink._id}, ingredientObj, function success(data) {
                console.log(data);
                $scope.drink.ingredients.push(ingredientObj);
                $scope.amount = $scope.ingredient = '';
            }, function error(data) {
                console.log(data);
            })
            console.log($scope.drink);
            $location.path('/show/' + data._id);

        }
    }, function error(data) {
        console.log(data);
    });
}]).controller('NewDrinkCtrl', ['$scope', '$location', 'Drink',
    function($scope, $location, Drink) {
        $scope.name = '';
        $scope.alcohol = '';
        $scope.image = '';
        $scope.ingredients = [];
        $scope.newDrink = function() {
            var postData = {
                name: $scope.name,
                alcohol: $scope.alcohol,
                image: $scope.image,
                ingredients: $scope.ingredients
            };
            var newDrink = new Drink(postData);
            newDrink.$save();
            $scope.drink = newDrink
            $location.path('/alldrinks');
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