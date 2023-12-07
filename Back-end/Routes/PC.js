const PC = require("../models/PCs");

const router = require("express").Router();
// Add PC
router.post("/", async (req, res) => {
  const newPC = new PC(req.body);
  const savedPC = await newPC.save();
  try {
    res.status(200).json(savedPC);
  } catch {
    res.status(500).json({ message: "Server Error" });
  }
});
// Get All PCe
router.get("/", async (req, res) => {
  const allPCes = await PC.find();
  try {
    res.status(200).json(allPCes);
  } catch {
    res.status(500).json("No");
  }
});
// Delete PC
router.delete("/:id", async (req, res) => {
  await PC.findByIdAndDelete(req.params.id);
  try {
    res.status(200).json("Product Deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
