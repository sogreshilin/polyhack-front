import React from 'react';

import styles from './Form.css';
import Button from "../Button/Button";
import TextField from "../TextField/TextField";
import Title from "../Title/Title";

const Form = (props) => {
    return (
        <div>
            <form className={styles.Form} onSubmit={props.onSubmit}>
                <Title text={props.title}/>
                <div className={styles.Wrapper}>
                    <TextField onChange={props.onChange} placeholder={props.placeholder}/>
                    <Button text={props.btnText}/>
                </div>
            </form>
        </div>
    );
};

export default Form;
