import React, {Component} from 'react';
import style from './Square.module.css';

class Square extends Component {

    state = {
        color: "blue",
    };

    handleClick = () => {
      this.setState(prevstate => ({color: prevstate.color === "red" ? "blue" : "red"}));
    };

    render() {
        const classes = `${style.square} ${this.state.color === "red" ? style.red : style.blue}`;
        return (
            <div>
                <div
                    className={classes}
                    onClick={this.handleClick}
                >
                    square1
                </div>
            </div>

        );
    }
}

export default Square;