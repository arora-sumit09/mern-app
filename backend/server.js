require('dotenv').config();
const express = require("express");
const workOutRoutes = require('./routes/workout');
//express app
const app = express();


//middleware
app.use((req,res,next)=>{
    console.log(req.path , req.method);
    next();
})

app.use('/api/workout' , workOutRoutes);
app.get('/' , (req , res)=>{
    res.json({ mssg : 'hello welcome'});
})

//for  listening onto a server
app.listen(process.env.PORT, () => {
  console.log("listening on port " , process.env.PORT);
});
