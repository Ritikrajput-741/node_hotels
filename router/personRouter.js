const express = require("express");
const personRouter = express.Router();
const person = require("../model/person");

personRouter.post("/", async (req, res) => {
  try {
    const personData = req.body;
    const newPerson = new person(personData);

    const response = await newPerson.save();
    console.log("Saved person to database");
    res.status(200).json(response);
  } catch (error) {
    console.error("Error saved person", error);
    res.status(500).json({ error: "Internal error occur" });
  }
});

personRouter.get("/", async (req, res) => {
  try {
    const data = await person.find();
    console.log("Saved person to database");
    res.status(200).json(data);
  } catch (err) {
    console.error("Error saved person", err);
    res.status(500).json({ error: "Internal error occur" });
  }
});

personRouter.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (
      workType === "chef" ||
      workType === "manager" ||
      workType === "waiter"
    ) {
      const response = await person.find({ work: workType });
      console.log("response fetch");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log("Invalid workType", err);
    res.status(500).json({ error: "Invalid Error occur" });
  }
});

personRouter.put("/:id", async (req, res) => {
  try {
    const personId = req.body.id;
    const personUpdateData = req.params.id;

    const response = await person.findByIdAndUpdate(
      personId,
      personUpdateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!response) {
      return res.status(404).json({ error: "person not found" });
    }

    console.log("data updated");
    res.status(200).json(response);
  } catch (err) {
    console.log("Invalid data", err);
    res.status(500).json({ error: "Invalid Error occur" });
  }
});


personRouter.delete("/:id", async (req, res) => {
  try {
    const personId = req.body.id;

    const response = await person.findByIdAndDelete(personId);

    if (!response) {
      return res.status(404).json({ error: "person not found" });
    }

    console.log("data deleted");
    res.status(200).json(response);
  } catch (err) {
    console.log("Invalid data", err);     
    res.status(500).json({ error: "Invalid Error occur" });
  }


  
});

module.exports = personRouter;
