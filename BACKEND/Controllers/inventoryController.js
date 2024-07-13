"use strict";
let Models = require("../models"); // matches index.js

const getInventorys = (res) => {
    // finds all Inventorys
    Models.Inventory.find({})
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
    }) 
}

const getById = (req, res) => {
    Models.Inventory.findById(req.params.id)
        .then(data => res.send({result: 220, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
    }) 
}

const createInventory = (data, res) => {
 // creates a new Inventory using JSON data POSTed in request body
 console.log(data)
 new Models.Inventory(data).save()
    .then(data => res.send({result: 200, data: data}))
    .catch(err => {
        console.log(err);
        res.send({result: 500, error: err.message})
    }) 
}

const updateInventory = (req, res) => {
    // updates the Inventory matching the ID from the param using JSON data POSTed in request body
    console.log(req.body)
    Models.Inventory.findByIdAndUpdate(req.params.id, req.body, { 
   new: true })
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
             console.log(err);
             res.send({result: 500, error: err.message})
         }) 
   }

const deleteInventory = (req, res) => {
     // deletes the Inventory matching the ID from the param
    Models.Inventory.findByIdAndDelete(req.params.id)
        .then(data => res.send({result: 200, data: data}))
        .catch(err => {
            console.log(err);
            res.send({result: 500, error: err.message})
        }) 
   }
   
module.exports = {
 getInventorys, createInventory, updateInventory, deleteInventory, getById,
}

   //commit