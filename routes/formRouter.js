const { Router } = require("express");
const Formmodel = require("../models/formModel");


const formRouter = Router();


formRouter.post("/create", async (req, res) => {
    const { empcode, firstname, mobileno, DOJ, salary, gender, accno, IFSCcode, bankname, officecity, officestate, officeaddress1, officepincode, employeestatus } = req.body;

    try {
        let form = new Formmodel({ empcode, firstname, mobileno, DOJ, salary, gender, accno, IFSCcode, bankname, officecity, officestate, officeaddress1, officepincode, employeestatus });
        await form.save();
        res.status(200).json({ message: "form created successfully" })
    } catch (error) {
        res.status(400).json({ message: "error creating form" })
    }

})


module.exports = formRouter