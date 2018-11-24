import React, {Component} from 'react';
import styles from "../atoms/BtnHeader.module.css";
import Header from "../templates/Header";
import Slider from "../atoms/Slider";
import Footer from "../templates/Footer";



export default () => {
    return (
        <div >
            <Header/>
            <Slider/>
            <Footer/>
        </div>



    )
}
