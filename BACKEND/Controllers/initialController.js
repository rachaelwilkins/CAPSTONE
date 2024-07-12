"use strict";
let Models = require("../models");
let axios = require("axios");

const initEpisodes = async (req, res) => {
    let episodes; 
    await axios.get(
        `https://api.sampleapis.com/simpsons/episodes` 
      ).then((response) => {  
        episodes=response.data;
      })
      for(
        let episode of episodes 

      ){
            console.log(episode)
            new Models.User(episode).save()
               .then(data => res.send({result: 200, data: data}))
               .catch(err => {
                   console.log(err);
                //    res.send({result: 500, error: err.message})
               }) 

      console.log(episode);}
      res.send("inserted successfully")  
}

module.exports = {
    initEpisodes
   }

   //commit   