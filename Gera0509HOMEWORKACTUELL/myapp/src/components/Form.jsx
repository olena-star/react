import React from 'react'
import { useState } from 'react'

export default function Form() {

    const [emailData, setEmailData] = useState('');
    const [passwordData, setPasswordData] = useState('');
    const onSubmitHandler = (event) => {
        event.preventDefault();

        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        const passwordRegex = /^1234$/;

        if (!passwordRegex.test(passwordData)) {
            console.log("Not correct Password");

        } else {
            console.log("OK!!");
        }

        if (!emailRegex.test(emailData)) {
            console.log("Not correct email");

        } else {
            console.log("OK!!");
        }
    }


    const onEmailHandler = (event) => {
        const data = event.target.value;
        setEmailData(data);
    }
    const onPasswordHandler = (event) => {
        const data = event.target.value;
        setPasswordData(data);
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <input onChange={onEmailHandler} type="text" name="Email" required />
            <input onChange={onPasswordHandler} type="password" name="Password" required />
            <input type="submit" value="Send" />
        </form>
    )
}
