import axios from "axios";
import { useEffect, useState } from "react";

const DoctorConsultation = () => {
    const [doctorConsultation, setDoctorConsultation] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3005/consult/getconsultdata")
            .then(response => {
                setDoctorConsultation(response.data);
                console.log(response.data);
            }).catch(err => {
                console.log(err);
            })
    }, []);

    return <>
        <div>
            <div className="container  border shadow-lg p-3 mb-5 b
            g-body rounded ">
                <table className="table ">
                    <thead>
                        <tr>
                            <th> Patient Name</th>
                            <th>Phone Number</th>
                            <th>Symptoms</th>
                        </tr>
                    </thead>
                    <tbody>
                        {doctorConsultation.map((patient, index) => (
                            <tr key={index}>
                                <td>{patient.name}</td>
                                <td>{patient.phone}</td>
                                <td>{patient.message}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>
        </div>
    </>
 

}
export default DoctorConsultation;



