let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all sneakers
router.get('/', (req, res) => {
 Controllers.sneakerController.getSneakers(res);
})

// Adds a POST route to create a new sneaker
router.post('/create', (req, res) => {
 Controllers.sneakerController.createSneaker(req.body, res);
})

// Adds a PUT route to update an existing sneaker
router.put('/:id', (req, res) => {
 Controllers.sneakerController.updateSneaker(req, res)
   })

// Adds a DELETE route to delete an existing sneaker
router.delete('/:id', (req, res) => {
 Controllers.sneakerController.deleteSneaker(req, res)
})

router.get('/init', (req, res) => {
  Controllers.initialController.initEpisodes(req, res)
 })

 router.get('/:id', (req, res) => {
  Controllers.sneakerController.getById(req, res)
 }) 

module.exports = router;
