import React from 'react';
import style from './FormControl.module.css';

const FormControl = (props) => {
    return (
        <div className={style.form}>
            {props.children}
        </div>
    );
};

export default FormControl;