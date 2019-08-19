import React from 'react';

import '../assets/css/Input.css';

const inputStatus = "password"



export default function Input_Password() {
    return (
        <password>
            <input type={inputStatus} placeholder="Password" value="Password123"/>
                <button></button>
        </password>
    );
}

// export default function Input_def() {
//     return (
//             <input type="password" placeholder="Password" value="Password123"/>
//     );
// }

