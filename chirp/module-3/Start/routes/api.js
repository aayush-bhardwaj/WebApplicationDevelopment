var express = require('express');
var router = express.Router();

router.route('/posts')

	//return all posts
	.get(function(req,res){

		//temporary solution
		res.send({message : "TODO return all posts"})
	})

	.post(function(req,res){

		//temporary solution
		res.send({message : "TODO Create a new post"})
	});

router.route('/posts/:id')

	//Get a particular post
	.get(function(req,res){

		//temporary solution
		res.send({message : "TODO : Get a particular post " + req.params.id});
	})

	//Get a particular post
	.put(function(req,res){

		//temporary solution
		res.send({message : "TODO : modify a particular post " + req.params.id});
	})

	//Get a particular post
	.delete(function(req,res){

		//temporary solution
		res.send({message : "TODO : delete a particular post " + req.params.id});
	});

module.exports = router;