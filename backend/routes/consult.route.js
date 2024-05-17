import express from "express";
import  {addConsult, getConsultData } from "../controller/consult.controller.js";

const router = express.Router();

router.post("/addconsult",addConsult);
router.get("/getconsultdata",getConsultData);

export default router;