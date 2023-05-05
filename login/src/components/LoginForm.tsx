import { log } from "console";
import React, { FormEvent, useState } from "react";

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [visable, setVisable] = useState('')
    function handleSubmit(e: FormEvent) {
        e.preventDefault()
        fetchData()
    }
    async function fetchData() {
        const res = await fetch('http://10.111.3.78:3000/api/users')
        const data = await res.json()
        console.log(data);
        if (data.includes(email))
            console.log('yes');

    }

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