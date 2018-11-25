import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from "./InputReg.module.css";
import classnames from 'classnames';

const InputReg = props => {

    return (
        <div>

            <input className={styles.input} {...props}/>
        </div>

    );

};

InputReg.propTypes = {
    error: PropTypes.bool,
};

InputReg.defaultProps = {
    error: false,
};

export default InputReg;



// const InputReg = ({error, ...rest}) => (
//     <input className={classnames(styles.input,{[styles.error]: error})}
//            {...rest}
//     />
// );
//

