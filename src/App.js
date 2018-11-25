import React, {Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import HomePage from "./pages/HomePage";
import InfoPage from "./pages/InfoPage";
import RegPage from "./pages/RegPage";
import PrivatePage from "./pages/PrivatePage";
import CharactersPage from "./pages/CharactersPage";
import HeroPage from "./pages/HeroPage";

// вызвать homepage

class App extends Component {


    render() {


        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/info" component={InfoPage} exact/>
                    <Route path="/registration" component={RegPage} exact/>
                    <Route path="/login" component={PrivatePage} exact/>
                    <Route path="/hero" component={CharactersPage} exact/>
                    <Route path="/infohero/:id" component={HeroPage} exact/>
                    </Switch>
            </BrowserRouter>
        );
    }
}

export default App;


// // Фйункциональный компонент
// // const App = ({name}) => (
// //
// {/*<div>*/}
//     {/*// <p>{name}</p>*/}
//     {/*// </div>*/}
// {/*// );*/}
//
// {/*<div className={styles.App}>*/
// }
// {/*<header className={styles.header}>*/
// }
// {/*<img src={logo} className={styles.logo} alt="logo"/>*/
// }
//
// {/*<Button onClick={this.handleClick}> </Button>*/
// }
// {/*{isShow && (<p>new text</p>)}*/
// }
//
// {/*</header>*/
// }
// {/*</div>*/
// }
//



// // Фйункциональный компонент
// const Footer = () => (
//
//
//     <footer id="footer" className={styles.footer} copyrights="&copy 2015 Copyright Text">
//
//         {
//             <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
//         }
//
//         {
//             <ul>
//                 <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
//                 <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
//                 <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
//                 <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
//             </ul>
//         }
//         <h5 className="white-text">Footer Content</h5>
//         <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
//
//     </footer>
//
// );
//
// export default Footer;




