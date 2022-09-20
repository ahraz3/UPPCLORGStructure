const mongoose = require("mongoose");
const Empprofile = require("./model");

const express = require("express");
const cors = require("cors");
const { response } = require("express");
const { Router } = require("react-router-dom");

const app = express();
const PORT = 8080;
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({ msg: "welcome" });
})


app.listen(PORT, () => {
  console.log(`server at ${PORT}`);

});


mongoose
  .connect("mongodb://localhost:27017/uppclhry")
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });
// 1. login page query 
app.get("/login", async (req, res) => {
  const sapid = req.query.sapid;
  const password = req.query.password;
  const empprofile = await Empprofile.findOne({ sapid });
  console.log(empprofile);

  if (empprofile) {
    res.status(200).json(empprofile);


  } else {
    res.status(404).json({ error: "user not found" });

  }

});

//2. change password database fuction 
app.get("/Changepassword",async (req,res)=>{
  const sapid=req.query.sapid;
  const password=req.query.password;
  const filter={SAP_ID:sapid};
  const update={PASSWORD:password};
  // console.log(sapid +"   JBMBJM  "+ password)
  Empprofile.findOneAndUpdate(filter,update, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated Docs : ", docs);
    }
});
  
  
})
