const mongoose = require("mongoose");

const Formschema = new mongoose.Schema({
    empcode: { type: String, required: true },
    firstname: { type: String, required: true },
    email: { type: String, required: true },
    mobileno: { type: String, required: true },
    DOJ: { type: Date, required: true },
    salary: { type: Number, required: true },
    gender: { type: String, required: true },
    accno: { type: Number, required: true },
    IFSCcode: { type: String, required: true },
    bankname: { type: String, required: true },
    officecity: { type: String, required: true },
    officestate: { type: String, required: true },
    officeaddress1: { type: String, required: true },
    officepincode: { type: String, required: true },
    employeestatus: { type: String, required: true },


}, { versionKey: false })


const Formmodel = mongoose.model("form", Formschema);

module.exports = Formmodel