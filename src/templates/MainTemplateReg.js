import React from 'react';
import styles from "./MainTemplateReg.module.css";


const MainTemplateReg = (props) => {
    return (
        <div className={styles.main_temp_reg}>
            {props.children}
        </div>
    );
};

export default MainTemplateReg;