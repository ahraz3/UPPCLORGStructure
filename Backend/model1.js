const mangoose = require("mongoose");
const { default: mongoose } = require("mongoose");
const meetingSchema=mongoose.Schema({
    REQ_SAP_ID : String,
    REQ_NAME : String,
    REQ_POST : String,
    MEETING_DATE : Date,
    MEETING_TIME : String,
    DURATION : Number,
    STATUS : String,
    APP_SAP_ID : String,
    APP_NAME : String,
    APP_POST : String,
    APP_REMARK : String,   
   })
const meeting=new mongoose.model("Meeting",meetingSchema);
module.exports=meeting;