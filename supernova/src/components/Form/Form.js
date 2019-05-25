import React from 'react';

import styles from './Form.css';

const Form = (props) => {
    return (
        <div>
            <form className={styles.Form} onSubmit={props.onSubmit}>
                <h3>{props.title}</h3>
                <div className={styles.Wrapper}>
                    <input 
                        placeholder={props.placeholder}
                        onChange={props.onChange}/>
                    <button>{props.btnText}</button>   
                </div>   
            </form>
        </div>
    );
}

export default Form;
