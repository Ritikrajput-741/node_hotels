const express = require("express");
const menuItemRouter = express.Router();
const menuItems = require("../model/menu");

menuItemRouter.post("/", async (req, res) => {
  try {
    const menuData = req.body; //here data is contain into request body
    const newData = new menuItems(menuData);

    const savedMenuData = await newData.save();
    console.log("Menu data is saved");
    res.status(200).json(savedMenuData);
  } catch (err) {
    console.error("Menu data Can not saved", err);
    res.status(500).json({ error: "Internal server failed" });
  }
});

menuItemRouter.get("/", async (req, res) => {
  try {
    const savedMenuData = await menuItems.find();
    console.log("Menu data is saved");
    res.status(200).json(savedMenuData);
  } catch (err) {
    console.error("Menu data Can not saved", err);
    res.status(500).json({ error: "Internal server failed" });
  }
});

menuItemRouter.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType;
    if (
      tasteType === "sweet" ||
      tasteType === "spicy" ||
      tasteType === "sour"
    ) {
      const resposnse = await menuItems.find({taste: tasteType });
      console.log("Taste type are find");
      res.status(200).json(resposnse);
    } else {
      res.status(404).json({ error: "Invalid taste type" });
    }
  } catch (err) {
    console.log("The Error is occur", err);
    res.status(404).json({ error: "Internal server Error" });
  }
});

module.exports = menuItemRouter;
