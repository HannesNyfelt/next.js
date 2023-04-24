import React from "react";

const RegisterForm = () => {
    return (
        <>
            <div>
                <input placeholder="Email" type="email" name="email" />
                <input placeholder="Password" type="password" name="password" />
                <button className="button">Register</button>
            </div>
        </>
    )
}

export default RegisterForm