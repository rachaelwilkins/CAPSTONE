"use strict";
let Models = require("../models"); // matches index.js

const getSneakers = (res) => {
    // finds all Sneakers
    Models.Sneaker.find({})
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
    }) 
}

const getById = (req, res) => {
    Models.Sneaker.findById(req.params.id)
        .then(data => res.send({result: 220, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
    }) 
}

const createSneaker = (data, res) => {
 // creates a new Sneaker using JSON data POSTed in request body
 console.log(data)
 new Models.Sneaker(data).save()
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    }) 
}

const updateSneaker = (req, res) => {
    // updates the Sneaker matching the ID from the param using JSON data POSTed in request body
    console.log(req.body)
    Models.Sneaker.findByIdAndUpdate(req.params.id, req.body, { 
   new: true })
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
             console.log(err);
             res.send({result: 500, error: err.message})
         }) 
   }

const deleteSneaker = (req, res) => {
     // deletes the Sneaker matching the ID from the param
    Models.Sneaker.findByIdAndDelete(req.params.id)
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        }) 
   }
   
module.exports = {
 getSneakers, createSneaker, updateSneaker, deleteSneaker, getById,
}

   //commit