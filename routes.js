const express = require("express");
const mongoose = require("mongoose");
const router = express.Router()

router.use(express.json());

const users = [
  {
    email: "rishi@google.com", password: "rishi123"
  },
  {
    email: "raj@google.com", password: "raj123"
  },
  {
    email: "singh@google.com", password: "singh123"
  },
];

router.put("./users/:id", async(req,res) => {
  try{
  const updatedUser = await findByIdAndUpdate(req.params.id, req.body, {new:true}, {new:runValidators});
  res.status(200).json({message: "User updated successfully", updatedUser});
  }
  catch(err){
    res.status(400).json({message: "Email not found", err});
  }
});

router.delete("./users/:id", async(req,res) =>{
  try{
    await findByIdAndDelete(req.params.id);
    res.status(200).json({message: "User deleted successfully"});
  }
  catch(err){
    res.status(400).json({message: "Email not found", err});
  }
});

module.exports = router;