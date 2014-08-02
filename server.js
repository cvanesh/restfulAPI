//server.js
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Bear = require('./app/models/bear.js');

app.use(bodyParser());

var port = process.env.PORT || 8080;
var router = express.Router();

//middleware
router.use(function(req, res, next) {
    console.log('request reached server');
    next();
});

router.get('/', function(req, res) {
    res.json({
        'message': 'Yo Dude!'
    });
});

router.route('/bears')
    .post(function(req, res) {
        var bear = new Bear({
            name: req.body.name
        });
        bear.save(function(err) {
            if (err) {
                res.send(err);
            }
            res.json({
                message: 'Bear Created'
            });
        });
    })
    .get(function(req, res) {
        Bear.find(function(err, bears) {
            if (err) {
                res.send(err);
            }
            res.json(bears);
        })
    });

router.route('/bears/:bear_id')
    .get(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, bear) {
            if (err) {
                res.send(err);
            }
            res.json(bear);
        })
    })
    .put(function(req, res) {
        Bear.findById(req.params.bear_id, function(err, bear) {
            if (err) {
                res.send(err);
            }
            bear.name = req.body.name;
            bear.save(function(err) {
                if (err) {
                    res.send(err);
                }
                res.json({
                    message: 'Bear updated'
                });
            })
        })
    })
    .delete(function(req, res) {
        Bear.remove({
            _id: req.params.bear_id
        }, function(err, bear) {
            if (err) {
                res.send(err);
            }
            res.json({
                message: 'Bear deleted.'
            })
        })
    });
app.use('/api', router);
app.listen(port);
console.log('Magic happens at port : ' + port);
