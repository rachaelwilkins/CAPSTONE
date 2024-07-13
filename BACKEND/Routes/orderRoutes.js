let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all Orders
router.get('/', (req, res) => {
 Controllers.orderController.getOrders(res);
})

// Adds a POST route to create a new Order
router.post('/create', (req, res) => {
 Controllers.orderController.createOrder(req.body, res);
})

// Adds a PUT route to update an existing Order
router.put('/:id', (req, res) => {
 Controllers.orderController.updateOrder(req, res)
   })

// Adds a DELETE route to delete an existing Order
router.delete('/:id', (req, res) => {
 Controllers.orderController.deleteOrder(req, res)
})

router.get('/init', (req, res) => {
  Controllers.initialController.initEpisodes(req, res)
 })

 router.get('/:id', (req, res) => {
  Controllers.orderController.getById(req, res)
 }) 

module.exports = router;
