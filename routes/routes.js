'use strict';
var path = require('path');
var submissionHandler = require('../controllers/submissionHandler.js');
var redirectionController = require('../controllers/redirectionController.js')
module.exports = function(app) {

    app.route('/')
            .get(function(req,resp){
                resp.render('screenA', { 
                    title: 'Welcome To Online treasure Hunt !',
                    imageId : 0 });
            });

    app.route('/start')
            .get(function(req,resp){
                resp.render('screenB', { 
                    title: 'Question_1',
                    imageId : 1 });
            });

    app.route('/end')
            .get(function(req,resp){
                resp.render('screenC', { 
                    title: 'The End',
                    imageId : 1000001 });
            });

    app.route('/submit/')
            .post(submissionHandler.handleSubmitRequest)

    
    app.route('/success/:id')
            .get(redirectionController.redirect)

};