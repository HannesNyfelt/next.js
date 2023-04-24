import React from "react";

const LoginForm = () => {
    return (
        <>
            <div>
                <input placeholder="Email" type="email" name="email" />
                <input placeholder="Password" type="password" name="password" />
                <button className="button">Login</button>
            </div>
        </>
    )
}

export default LoginForm