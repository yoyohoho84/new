import React, {Component} from 'react';
import styles from "./Header.module.css";
import BtnHeader from "../atoms/BtnHeader";
import {Autocomplete, Navbar, NavItem, Row, Button} from "react-materialize";

// Фйункциональный компонент
const Header = () => (


    <header id="header" className={styles.header}>


        <Navbar className={styles.header_navBar} brand='ADT Exchange' right>
            <NavItem href='#'>

                <Row purple darken-4>
                    <Autocomplete
                        title='Поиск'
                        data={
                            {
                                'Apple': null,
                                'Microsoft': null,
                                'Google': 'https://images.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png'
                            }
                        }
                    />
                </Row>


            </NavItem>
            <NavItem href='/info'>Информация</NavItem>
            <NavItem href='#'>Обучение</NavItem>
            <NavItem href='#'>Тарифы</NavItem>
            <NavItem href='/hero'>Герои</NavItem>

            <NavItem href='/registration'><Button className="red" >Регистрация</Button></NavItem>
            <NavItem href='/login'><BtnHeader btn="blue">Войти</BtnHeader></NavItem>

        </Navbar>


    </header>

);

export default Header;

// import {Button, Icon} from 'react-materialize'
//
// export default () => (
//     <Button waves='light'>
//         <Icon>thumb_up</Icon>
//     </Button>
// )