import React, {Component} from 'react';
import styles from "./MainHomePage.module.css";
import CardHelp from "../atoms/CardHelp";

// Фйункциональный компонент
const MainHomePage = () => (

    <div className={styles.main}>
        <h1 align="center" >Что может сервис?</h1>
        <p align="center">Удобный функционал, который решает бизнес-задачи любой сложности</p>
        <CardHelp/>
    </div>


);

export default MainHomePage;