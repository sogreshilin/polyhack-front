import React from "react";

const TextField = ({ placeholder, value, onChange }) =>
    <input
        value={value}
        placeholder={placeholder}
        onChange={onChange}/>;

export default TextField;
