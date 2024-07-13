"use strict";
let Models = require("../models"); // matches index.js

const getOrders = (res) => {
    // finds all Orders
    Models.Order.find({})
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
    }) 
}

const getById = (req, res) => {
    Models.Order.findById(req.params.id)
        .then(data => res.send({result: 220, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
    }) 
}

const createOrder = (data, res) => {
 // creates a new Order using JSON data POSTed in request body
 console.log(data)
 new Models.Order(data).save()
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    }) 
}

const updateOrder = (req, res) => {
    // updates the Order matching the ID from the param using JSON data POSTed in request body
    console.log(req.body)
    Models.Order.findByIdAndUpdate(req.params.id, req.body, { 
   new: true })
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
             console.log(err);
             res.send({result: 500, error: err.message})
         }) 
   }

const deleteOrder = (req, res) => {
     // deletes the Order matching the ID from the param
    Models.Order.findByIdAndDelete(req.params.id)
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        }) 
   }
   
module.exports = {
 getOrders, createOrder, updateOrder, deleteOrder, getById,
}

   //commit