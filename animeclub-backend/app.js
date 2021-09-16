const express = require("express");
const userroute = require("./routes/User-routes")
const itemroute = require("./routes/Item-routes.js")
const app = express();
const mongoose = require("mongoose");
const newsroute = require("./routes/News-routes");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use((req,res,next) =>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,DELETE');
  next();
  });
app.use("/users",userroute);
app.use("/news",newsroute);
app.use("/item",itemroute);


mongoose.connect("mongodb+srv://shivank:shivank@cluster0.e3ldd.mongodb.net/Animeclub?retryWrites=true&w=majority").then(()=> 
{
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });        
}).catch(err => {

  console.log(err);
}); 



