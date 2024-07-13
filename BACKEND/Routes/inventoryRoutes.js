let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all Inventorys
router.get('/', (req, res) => {
 Controllers.inventoryController.getInventorys(res);
})

// Adds a POST route to create a new Inventory
router.post('/create', (req, res) => {
 Controllers.inventoryController.createInventory(req.body, res);
})

// Adds a PUT route to update an existing Inventory
router.put('/:id', (req, res) => {
 Controllers.inventoryController.updateInventory(req, res)
   })

// Adds a DELETE route to delete an existing Inventory
router.delete('/:id', (req, res) => {
 Controllers.inventoryController.deleteInventory(req, res)
})

router.get('/init', (req, res) => {
  Controllers.initialController.initEpisodes(req, res)
 })

 router.get('/:id', (req, res) => {
  Controllers.inventoryController.getById(req, res)
 }) 

module.exports = router;
