import express from "express";
import  {addConsult, doctorConsultData, getConsultData } from "../controller/consult.controller.js";

const router = express.Router();

router.post("/addconsult",addConsult);
router.post("/getconsultdata",getConsultData);
router.post("/doctorConsultData",doctorConsultData);

export default router;