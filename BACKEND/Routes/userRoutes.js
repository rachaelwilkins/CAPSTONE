let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all Users
router.get('/', (req, res) => {
 Controllers.userController.getUsers(res);
})

// Adds a POST route to create a new User
router.post('/create', (req, res) => {
 Controllers.userController.createUser(req.body, res);
})

// Adds a PUT route to update an existing User
router.put('/:id', (req, res) => {
 Controllers.userController.updateUser(req, res)
   })

// Adds a DELETE route to delete an existing User
router.delete('/:id', (req, res) => {
 Controllers.userController.deleteUser(req, res)
})

router.get('/init', (req, res) => {
  Controllers.initialController.initEpisodes(req, res)
 })

 router.get('/:id', (req, res) => {
  Controllers.userController.getById(req, res)
 }) 

module.exports = router;
