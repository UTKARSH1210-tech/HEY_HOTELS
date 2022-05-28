import express from "express";
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/User.js";
const route = express.Router();
import { verifyToken, verifyUser, verifyAdmin } from "../utils/verifyToken.js";

route.get("/checkauthentication", verifyToken, (req,res,next)=>{
  res.send("hello user, you are logged in")
})

route.get("/checkuser/:id", verifyUser, (req,res,next)=>{
  res.send("hello user, you are logged in and you can delete your account")
})

route.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
  res.send("hello admin, you are logged in and you can delete all accounts")
})

//UPDATE
route.put("/:id", verifyUser, updateUser);

//DELETE
route.delete("/:id", verifyUser, deleteUser);

//GET
route.get("/:id", verifyUser, getUser);

//GET ALL
route.get("/", verifyAdmin, getUsers);
export default route;
