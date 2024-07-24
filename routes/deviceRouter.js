const express = require("express");
const deviceModel = require("../model/deviceModel");
const router = express.Router();
const auth = require("../auth.js");

//Registering a new device (Create)
router.post("/create", auth, async (req, res) => {
  try {
    const newDevice = new deviceModel(req.body);
    await newDevice.save();
    res.send({ message: "Successfully Registered the device" });
  } catch (err) {
    res.send({ message: err });
  }
});

//Reading all the Device's Information
router.get("/readAll/", auth, async (req, res) => {
  try {
    const Info = await deviceModel.find();
    res.send(Info);
  } catch (err) {
    res.send({ message: err });
  }
});

//Reading the Device Data by ID

router.get("/read/:id", auth, async (req, res) => {
  try {
    const data = await deviceModel.findOne({ id: req.params.id });
    if (!data) {
      res.send({ message: "No Device Found" });
      return;
    }
    res.send(data);
  } catch (err) {
    res.send({ message: err });
  }
});

//Update Information in Device's information
router.put("/update/:id", auth, async (req, res) => {
  try {
    const newData = await deviceModel.findOneAndUpdate(
      { id: req.params.id },
      req.body
    );
    res.send(newData);
  } catch (err) {
    res.send({ message: err });
  }
});

//Deleting a Device by ID
router.delete("/delete/:id", auth, async (req, res) => {
  try {
    const deleteData = await deviceModel.findOneAndDelete({
      id: req.params.id,
    });
    if (!deleteData) {
      res.send({ message: "Device does not exists" });
      return;
    }
    res.send({ message: "Deleted Successfully" });
  } catch (err) {
    res.send({ message: err });
  }
});
module.exports = router;
