import React, {Component} from 'react';
import styles from "./InputReg.module.css";

const InputReg = props => {

    return (
        <div>

            <input className={styles.input} {...props}/>
        </div>

    );

};

export default InputReg;

