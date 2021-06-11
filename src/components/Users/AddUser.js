import React, { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button'
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';


const AddUser = (props) => {
    const [enterdUsername, setEnterdUsername] = useState("");
    const [enterdAge, setEnterdAge] = useState("");
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enterdUsername.trim().length === 0 || enterdAge.trim().length === 0) {
            setError({title: "Invalid Input", message: "Please enter a valid name and age (non-empty values)."})
            return;
        }
        if(+enterdAge < 1) {
            setError({title: "Invalid Age", message: "Please enter a valid age (> 0)."})
            return;
        }
        props.onAddUser(enterdUsername, enterdAge);
        setEnterdUsername("");
        setEnterdAge("");
    }
    const usernameChangeHandler = (event) => {
        setEnterdUsername(event.target.value);
    }
    const ageChangeHandler = event => {
        setEnterdAge(event.target.value);
    }
    const errorHandler = () => {
        setError(null);
    };
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enterdUsername} onChange={usernameChangeHandler} />
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enterdAge} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};
export default AddUser;