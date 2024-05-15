import { DataTypes } from "sequelize";
import sequelize from "../db/dbConfig.js";



const Consult = sequelize.define("consult", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    phone: {
        type: DataTypes.STRING, // Allow variable-length strings
        allowNull: false,
        unique: true
    },

    message: {
        type: DataTypes.TEXT, // Use TEXT for longer strings
        allowNull: false
    },

    doctorId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }

});



sequelize.sync()
    .then(() => {
        console.log("consult table created....")
    })
    .catch((err) => {
        console.log(" something wrong....")
        console.log(err);
    });

export default Consult;
