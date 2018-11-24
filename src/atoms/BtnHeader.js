import React, {Component} from 'react';
import styles from "./BtnHeader.module.css";
import {Button} from "react-materialize";

const BtnHeader = (props) => (

<Button className={props.btn}>
    {props.children}
</Button>



);

export default BtnHeader;

