import React, {Component} from 'react';
import axios from 'axios';
import Header from "../templates/Header";
import Footer from "../templates/Footer";
import styles from "./HeroPage.module.css";
import MainTemplateReg from "../templates/MainTemplateReg";


class HeroPage extends Component {

    state = {
        loading: false,
        error: true,
        data: [],
    };

    componentDidMount() {
        setTimeout(() => {
            this.fetch();
        }, 2000);
    }

    fetch = () => {
        this.setState({
            loading: true,
            error: false,
            data: [],
        });

        axios
            .get(`${process.env.REACT_APP_MARVEL_API_URL}/v1/public/characters/${this.props.match.params.id}`, {  // match - путь к св-ву роутера
                params: {
                    apikey: process.env.REACT_APP_MARVEL_API_KEY,
                },
            })
            .then((response) => {
                this.setState({
                    loading: false,
                    data: response.data.data.results,
                });
            })
            .catch(() => {
                this.setState({
                    loading: false,
                    error: true,
                });
            });
    };

    // const queryParams = qs.parse(this.props.location.search, {ignore
    // const rawPAge = queryParams.page;
    // if(typeof rawPage !== 'undefined' && (isNaN(+rawPage) || +rawPage <=
    // return <notFoundPAge/>
// qs.parse   qs.string
    render() {


        return (
            <div className={styles.hero_page}>
                <Header/>

                <MainTemplateReg>
                    <h1 color="white">Герои</h1>
                    {this.state.loading && 'Зарузка...'}
                    {!this.state.loading && !this.state.error && this.state.data.length === 0 && 'Пусто'}
                    {this.state.error && (
                        <div>
                            <p>Произошла ошибка при загруке</p>
                            <button type="button" onClick={this.fetch}>Повторить загрузку</button>
                        </div>
                    )}
                    {this.state.data.map(character => (
                        <div key={character.id}>
                            <h2>{character.name}</h2>
                            <h3>{character.id}</h3>
                            <h3>{character.description}</h3>
                            <img className={styles.imgHero}
                                 src={`${character.thumbnail.path}.${character.thumbnail.extension}`}/>


                        </div>
                    ))}


                </MainTemplateReg>


                <h1>Тут будет текст</h1>
                <h1>Тут будет текст</h1>
                <h1>Тут будет текст</h1>
                <Footer/>
            </div>
        );
    }
}

export default HeroPage;