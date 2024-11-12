require('dotenv').config();
const express = require("express");
const workOutRoutes = require('./routes/workout');
const mongoose = require('mongoose');

//express app
const app = express();

//middleware
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.path , req.method);
    next();
})

//connecting 
mongoose.connect(process.env.MONGO_URI)
  .then(()=>{
    //listen for requests
    console.log("DB Connected");
    app.listen(process.env.PORT, () => {
      console.log("listening on port " , process.env.PORT);
    });
  })
  .catch((error)=>{
    console
  })

app.use('/api/workout' , workOutRoutes);



