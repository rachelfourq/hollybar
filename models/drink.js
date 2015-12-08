var mongoose = require('mongoose');

var IngredientSchema = new mongoose.Schema({
	ingredient: String,
	amount: String
});

var DrinkSchema = new mongoose.Schema({
  name: String,
  alcohol: String,
  ingredients: [IngredientSchema];
});

module.exports = mongoose.model('Drink', DrinkSchema);
