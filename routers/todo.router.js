var express = require('express');
var router = express.Router();
var Todo = require('../models/todo.model');


router.get('/todos', function(req, res){
  Todo.find({}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        todos: documents
      });
    }
  });
});
router.get('/todos/:id', function(req, res){
  Todo.find({_id: req.params.id}, function(err, documents){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        todos: documents
      });
    }
  });
});
router.post('/todos', function(req, res){
  var todo = new Todo(req.body);
  todo.save(function(err){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(201).json({
        msg: 'Successfully created a new todo'
      });
    }
  });
});
router.put('/todos/:id', function(req, res){
  Todo.findOneAndUpdate({_id: req.params.id}, req.body, function(err, document){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully updated'
    });

    }
  });
});
router.delete('/todos/:id', function(req, res){
  Todo.remove({_id: req.params.id}, function(err){
    if(err){
      res.status(500).json({
        msg: err
      });
    } else {
      res.status(200).json({
        msg: 'Successfully deleted'
      });
    }
  });
});

module.exports = router;
