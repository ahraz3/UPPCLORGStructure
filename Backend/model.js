const mangoose = require("mongoose");
const { default: mongoose } = require("mongoose");
const userSchema=mongoose.Schema({
    SAP_ID : String,
    EMP_NAME : String,
    EMP_SUB_GRP : String,
    AGE : Number,
    GENDER : String,
    REP_OFFICER_ID : String,
    PER_MOBILE : String,
    PASSWORD : String,
    
   })
const empprofile=new mongoose.model("Empprofile",userSchema);
module.exports=empprofile;






