import classes from './LoginForm.module.css';
import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';

const LoginForm = (props) => {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [enteredPassword, setEnteredPassword] = useState("");

    const emailChangeHandler = (e) => {
        setEnteredEmail(e.target.value)
    }

    const passwordChangeHandler =(e) =>{
        setEnteredPassword(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(enteredEmail, enteredPassword)
    }
    return(
        <>
            <Card className={classes.login} >
                <form onSubmit={submitHandler} >
                    <h2>User Login</h2>
                    <div>
                        <label>Email: </label>
                        <br />
                        <input id="email" type="text" value={enteredEmail} onChange={emailChangeHandler} ></input>
                    </div>
                    <div>
                        <label>Password: </label>
                        <br />
                        <input id="password" type="password" value={enteredPassword} onChange={passwordChangeHandler} ></input>
                    </div>

                    <Button type="submit" > LOGIN </Button>
                </form>
            </Card>
        </>
    );
}

export default LoginForm;