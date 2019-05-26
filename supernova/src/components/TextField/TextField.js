import React from "react";
import styles from "./TextField.css";

const TextField = ({ placeholder, value, onChange }) =>
    <input
        className={styles.textField}
        value={value}
        placeholder={placeholder}
        onChange={onChange}/>;

export default TextField;
