import React, {Component} from 'react';
import axios from 'axios';
import MainTemplateReg from '../templates/MainTemplateReg';
import style from "../atoms/Square.module.css";


class CharactersPage extends Component {

    state = {
        loading: false,
        error: true,
        data: [],
    };

    componentDidMount() {  // сперва исполняется то что происходит внутри
        setTimeout(() => {
            this.fetch();
        }, 2000);
    }

    fetch = () => {    // fetch - получать
        this.setState({
            loading: true,
            error: false,
            data: [],
        });
// $ темплейт литерал

        axios
            .get(`${process.env.REACT_APP_MARVEL_API_URL}/v1/public/characters`, {   // передаем ссылку на страницу
                params: {
                    // apikey: '31fa0c1ffcf9fac33bb07ae338a004eb',
                    apikey: process.env.REACT_APP_MARVEL_API_KEY,
                    // limit: 20, // кол-во героев отображаемых
                    // offset: (this.state.page-1)*20, // пропустить
                },
            })
            .then((response) => {     //then - затем
                this.setState({
                    loading: false,
                    data: response.data.data.results,    // response - ответ
                });
            })
            .catch(() => {    // catch - ловить
                this.setState({    // set state - установить состояние
                    loading: false,
                    error: true,
                });
            });
    };


    render() {

        return (
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
                        <h2><a href={`${"/infohero/"}${character.id}`} >{character.name}</a></h2>
                    </div>
                ))}
            </MainTemplateReg>
        );
    }
}

export default CharactersPage;