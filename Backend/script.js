const mongoose = require("mongoose");
const Empprofile = require("./model");
const Meeting = require("./model1");

const express = require("express");
const cors = require("cors");
// const { response } = require("express");
const { Router } = require("react-router-dom");

const app = express();
const PORT = 8080;
app.use(cors());
app.use(express.json());  //Body parser
app.use(express.urlencoded())

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
  // console.log(empprofile);

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
  const currentPassword=req.query.currentPassword;
  const user = await Empprofile.findOne({ sapid });

  // const filter = {PASSWORD: currentPassword};
  // console.log(user.PASSWORD);

  if(currentPassword === user.PASSWORD) {
     const filter={SAP_ID:sapid};
     const update={PASSWORD:password};
       // console.log(sapid +"   JBMBJM  "+ password)
       Empprofile.findOneAndUpdate(filter,update, function (err, docs) {
            if (err){
                console.log(err)
            }
            else{
                // console.log("Updated Docs : ", docs);
                res.send({message: "Password Changed Successfully. Login now."});
            }
  })
} else{
    
         res.send({message: "Password Incorrect"});

}
 
});

//3. Creating Employee Data
app.post("/Createemp", async (req, res) => {
  console.log(req.body)
  const { sapid, fname,designation, age,gender, reporting,contact,password} = req.body
        Empprofile.findOne({ SAP_ID: sapid}, (err, user) => {
      if (user) {
        console.log(user)
          res.send({message: "Employee already exists"})
      } else {
        
          const empprofile = new Empprofile({
            SAP_ID : sapid,
            EMP_NAME: fname,
            EMP_SUB_GRP: designation,
            AGE: age,
            GENDER: gender,
            REP_OFFICER_ID: reporting,
            PER_MOBILE : contact,
            PASSWORD :password,
          })
          empprofile.save( err => {
              if (err) {
                  res.send(err)
              }else {
                  res.send ({ message: "Employee Successfully created"})
              }
      
          })
      }
  })
  
})
//4. Delete employee
app.post("/Deleteemp", async (req, res) => {
  const {sapid} = req.body
  console.log(req.body)
  Empprofile.findOne({ SAP_ID: sapid}, (err, user) => {
    if(user) {
      user.deleteOne({SAP_ID : sapid})
      res.send ({ message: "Employee Successfully Deleted"})
    } else {
      res.send ({ message: "Employee not exists"})
    }
  })

  
})

//4. show employee data  new 
app.get("/EmpDetails", async (req, res) => {
  const sapid = req.query.sapid;
  console.log("sapid", sapid)
  const empprofile = await Empprofile.findOne({ SAP_ID : sapid });
  console.log("empprofile", empprofile.SAP_ID);

  if (empprofile) {
    res.status(200).send(empprofile);
  

  } else {
    res.status(404).json({ error: "user not found" });

  }

});

//5. Schedule Meeting
app.post("/Createmeeting", async (req, res) => {
  // console.log(req.body)
  const { sapid, mosapid, seldate, stime, endate} = req.body

  const reporting = await Empprofile.findOne({ SAP_ID : mosapid });
  const user = await Empprofile.findOne({ SAP_ID : sapid });
       
          const meeting = new Meeting({
            REQ_SAP_ID : sapid,
            REQ_NAME : user.EMP_NAME,
            APP_SAP_ID : mosapid,
            REQ_POST: user.EMP_SUB_GRP,
            APP_NAME : reporting.EMP_NAME,
            APP_POST : reporting.EMP_SUB_GRP,
            MEETING_DATE : seldate,
            MEETING_TIME: stime,
            DURATION: endate
          })

          console.log(meeting)
          meeting.save( err => {
              if (err) {
                  res.send(err)
              }else {
                  res.send ({ message: "Meeting Scheduled"})
              }
      
          })


      }
  )

// 6. Show Meeting Details
app.get("/MeetingDetails", async (req,res)=>{

  console.log(req.params);
  Meeting.find({APP_SAP_ID: 10000011})
  
  
  .then((data)=>{
    res.send({data: data});
    console.log(data);
    
  })
  .catch((err)=>{
    res.send({error: err});
    console.log(err);

  })

});
