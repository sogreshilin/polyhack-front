import React from 'react';

import styles from './Form.css';
import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import Title from "../Title/Title";

const Form = ({ title, value, placeholder, btnText, error, onChange, onSubmit }) => {
    return (
        <div>
            <form className={styles.Form} onSubmit={onSubmit}>
                <Title text={title}/>
                <div className={styles.Wrapper}>
                    <TextField error={error} onChange={onChange} value={value} placeholder={placeholder}/>
                    <Button text={btnText}/>
                </div>
            </form>
        </div>
    );
};

export default Form;
