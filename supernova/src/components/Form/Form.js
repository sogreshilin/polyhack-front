import React from 'react';

import styles from './Form.css';
import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import Title from "../Title/Title";

const Form = ({ title, value, placeholder, btnText, onChange, onSubmit }) => {
    return (
        <form className={styles.Form} onSubmit={onSubmit}>
            <Title text={title}/>
            <div className={styles.Wrapper}>
                <TextField onChange={onChange} value={value} placeholder={placeholder}/>
                <Button text={btnText}/>
            </div>
        </form>
    );
};

export default Form;
