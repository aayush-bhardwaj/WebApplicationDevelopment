var express = require('express');
var router = express.Router();

router.route('/')
	.get(function(req,res){
		res.send({message:'TODO : return all posts'})
	})

	.post(function (req,res) {
		res.send({message: 'TODO: add a new post'})
	});

module.exports = router;