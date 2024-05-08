// import axios from "axios";
// import React, { useState } from "react";

// function googleAuth() {

//     const [user, setUser] = useState(null);
//     const [profile, setProfile] = useState(null);

//     const login = useGoogleLogin({
//         onSuccess: (codeResponse) => {
//             setUser(codeResponse);
//             console.log(codeResponse);
//             Userdata(codeResponse);
//         },
//         onError: (error) => console.log('Login Failed:', error),
//     });

//     const Userdata = (userData) => {
//         if (userData) {
//             axios
//                 .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userData.access_token}`, {
//                     headers: {
//                         Authorization: `Bearer ${userData.access_token}`,
//                         Accept: 'application/json'
//                     }
//                 })
//                 .then((res) => {
//                     setProfile(res.data);
//                     console.log(res.data);
//                 })
//                 .catch((err) => console.log(err));
//         }
//     };


//     return <>
//         <button>
//             <div onClick={login} className="ms-2 me-2 icon-google"></div>
//         </button>
//     </>
// }

// export default googleAuth;

import React, { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';

function GoogleSign() {
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse);
            console.log(codeResponse);
            Userdata(codeResponse);
        },
        onError: (error) => console.log('Login Failed:', error),
    });

    const Userdata = (userData) => {
        if (userData) {
            axios
                .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${userData.access_token}`, {
                    headers: {
                        Authorization: `Bearer ${userData.access_token}`,
                        Accept: 'application/json'
                    }
                })
                .then((res) => {
                    setProfile(res.data);
                    console.log(res.data);
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <button className='' onClick={login}>
            {/* <i className="fa-brands fa-google" style={{ backgroundColor: 'transparent' }} >wITH GOOGLE</i> */}
            <div className="ms-2 me-2 icon-google"></div>
        </button>
    );
}

export default GoogleSign;