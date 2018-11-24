import React, { Component } from 'react';


// Фйункциональный компонент
const Button_1 = ({children,onClick}) => (
  <div>
      {/*<button id="registry" className="btn waves-effect waves-light blue-grey darken-4"*/}
              {/*type="submit" name="action">*/}
          {/*Зарегистрироваться*/}
      {/*</button>*/}
      <button onClick={onClick}>EDIT </button>
  </div>
);

export default Button_1;

