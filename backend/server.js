require('dotenv').config();
const express = require("express");
const workOutRoutes = require('./routes/workout');
const mongoose = require('mongoose');
const cors = require('cors');

//express app
const app = express();

//middleware

// app.use(cors({
//     origin: 'http://localhost:3000' // allow requests from localhost:3000
// }));
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.path , req.method);
    next();
})
app.use('/api/workout' , workOutRoutes);

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
    console.log(error);
  })




