import React from "react";
import styles from "./Button.css";

const Button = ({ text, onClick }) => <button onCLick={onClick} className={styles.button}>{text}</button>;

export default Button;
