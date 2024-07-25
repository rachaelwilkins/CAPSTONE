const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
let dbConnect = require("./dbConnect")
const corsOptions = {
    origin: "http://localhost:5173"
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

app.get("/", (req, res) => {
 res.json({ message: "Welcome to my Capstone Project." });
});
    
// set port, listen for requests
const PORT = process.env.PORT || 8080;
let sneakerRoutes = require('./Routes/sneakerRoutes');
app.use('/api/sneakers', sneakerRoutes);
let inventoryRoutes = require('./Routes/inventoryRoutes');
app.use('/api/inventorys', inventoryRoutes);
let userRoutes = require('./Routes/userRoutes');
app.use('/api/users', userRoutes);
let orderRoutes = require('./Routes/orderRoutes');
app.use('/api/orders', orderRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
