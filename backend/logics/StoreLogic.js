const Item = require('../models/Item');

search = (req, res) => {
  const searchedText = req.params.searchedText;  
  Item.find({$or:[
        {"productType":{$regex:".*"+ searchedText +".*"}},
        {"name":{$regex:".*"+ searchedText +".*"}},
        {"desc":{$regex:".*"+ searchedText +".*"}}, 
        {"animalType":{$regex:".*"+ searchedText +".*"}}]})
    .then(results => {
      console.log(results)
      if (results.length == 0) {
        return res.status(404).send("No results found for this text");
      } else {
        return res.status(200).send(results);
      }
      
    })
    .catch((err) => {
      return res.status(404).send("Something is wrong with the request:" + err);
    });
  }
module.exports = {search: search};