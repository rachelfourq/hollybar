var express = require('express');
var Drink = require('../models/drink');
var router = express.Router();

router.route('/')
  .get(function(req, res) {
    Drink.find(function(err, drinks) {
      if (err) return res.status(500).send(err);
      res.send(drinks);
    });
  })
  .post(function(req, res) {
    Drink.create(req.body, function(err, drink) {
      if (err) return res.status(500).send(err);
      res.send(drink);
    });
  });

router.route('/:id')
  .get(function(req, res) {
    Drink.findById(req.params.id, function(err, drink) {
      if (err) return res.status(500).send(err);
      res.send(drink);
    });
  })
  .put(function(req, res) {
    Drink.findByIdAndUpdate(req.params.id, req.body, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  })
  .post(function(req, res) {

  })
  .delete(function(req, res) {
    Drink.findByIdAndRemove(req.params.id, function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    });
  });

 router.route('/:id/ingredients')
  .get(function(req, res) {
    Drink.findById(req.params.id, function(err, drink) {
      if (err) return res.status(500).send(err);
      res.send(drink);
    });
  })
  .post(function(req, res) {
    Drink.findById(req.params.id, function(err, drink) {
      console.log(req.body)
      console.log(drink)
      drink.ingredients.push(req.body);

      drink.save(function(err) {
      if (err) return res.status(500).send(err);
      res.send({'message': 'success'});
    })
    });
  })


module.exports = router;