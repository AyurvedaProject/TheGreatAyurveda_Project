import { validationResult } from "express-validator";
import Consult from "../model/consult.model.js";

export const addConsult = (request, response, next) => {
    const errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(400).json({ errors: errors.array() }); // Changed status code and error response key

    const { name, phone, message } = request.body.formData;
    console.log(request.body);
    Consult.create({
        name,
        phone,
        message
    })

        .then(() => {
            return response.status(200).json({ message: "Consult Saved" }); // Removed result parameter since it's not being used
        })
        .catch((err) => {
            console.error("Error:", err); // Log the error for debugging purposes
            return response.status(500).json({ error: "Internal server error" }); // Removed 'err' from the error response
        });



}

export const getConsultData = (request, response, next) => {
    Consult.findAll()
        .then((result) => {
            return response.status(200).json(result);

        })
        .catch((err) => {
            return response.status(500).json({ err: "Internal Server error" ,err});
        });
}


