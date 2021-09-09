const express = require("express");
const userroute = require("./routes/User-routes")
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/users",userroute);

mongoose.connect("mongodb+srv://shivank:shivank@cluster0.e3ldd.mongodb.net/Animeclub?retryWrites=true&w=majority").then(()=> 
{
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });        
}).catch(err => {

  console.log(err);
}); 



