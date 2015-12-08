var mongoose = require('mongoose');

var DrinkSchema = new mongoose.Schema({
  name: String,
  alcohol: String,
  ingredients: [
  	{
  		ingredient: String,
  		amount: String
  	}
  ]
});

module.exports = mongoose.model('Drink', DrinkSchema);
