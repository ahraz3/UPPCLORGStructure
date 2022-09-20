const mangoose = require("mongoose");
const { default: mongoose } = require("mongoose");
const userSchema=mongoose.Schema({
    SAP_ID : String,
    PASSWORD : String,
    TITLE : String,
    EMP_NAME : String,
    OLD_AUDIT_NO : String,
    PF_TRUST : String,
    PAYROLL_AREA_CODE : String,
    PAYROLL_AREA : String,
    PERSONAL_AREA_CODE : String,
    PERSONAL_AREA : String,
    PERSONAL_SUB_AREA_CODE : String,
    PERSONAL_SUB_AREA : String,
    DISTRICT : String,
    EMP_GRP_CODE : String,
    EMP_GRP : String,
    EMP_SUB_GRP_CODE : String,
    EMP_SUB_GRP : String,
    REP_OFFICER_ID : String,
    REP_OFFICER_NAME : String,
    DEPT_ID : String,
    DEPT_TEXT : String,
    DDO_OFFICE_CODE : String,
    DDO_OFFICE_NAME : String,
    DDO_NAME : String,
   })
const empprofile=new mongoose.model("Empprofile",userSchema);
module.exports=empprofile;


