import React, {Component} from 'react';
import axios from 'axios';
import MainTemplateReg from '../templates/MainTemplateReg';
import style from "../atoms/Square.module.css";
// import TablePagination from '@material-ui/core/TablePagination';
import {Pagination, Tabs} from "react-materialize";



class CharactersPage extends Component {

    state = {
        loading: false,
        error: false,
        data: [],
        page: 1,
    };

    componentDidMount() {  // сперва исполняется то что происходит внутри
        setTimeout(() => {    // setTimeout - делает задержку в м/с
            this.fetch();
        }, 1000);
    }

    fetch = () => {    // fetch - получать
        this.setState({  // установить состояние
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
                    limit: 20, // кол-во героев отображаемых
                    offset: (this.state.page - 1) * 20, // пропустить
                },
            })
            .then((response) => {     //then - затем   response - ответ
                this.setState(prevState => ({
                    loading: false,
                    data: [...prevState.data, ...response.data.data.results],
                    // data: response.data.data.results,    // response - ответ
                }));
            })
            .catch(() => {    // catch - ловить
                this.setState({    // set state - установить состояние
                    loading: false,
                    error: true,
                });
            });
    };

    handleShowMore = () => {
        this.setState(prevState => ({
            page: prevState.page + 1,
        }), () => {
            this.fetch();
        });
    };


    render() {

        return (
            <MainTemplateReg>
                <h1 color="white">Герои</h1>
                {this.state.data.map(character => (
                    <div key={character.id}>
                        <h2><a href={`${"/infohero/"}${character.id}`}>{character.name}</a></h2>
                    </div>
                ))}


                {this.state.loading && 'Зарузка...'}
                {!this.state.loading && !this.state.error && this.state.data.length === 0 && 'Пусто'}
                {this.state.error && (
                    <div>
                        <p>Произошла ошибка при загруке</p>
                        <button type="button" onClick={this.fetch}>Повторить загрузку</button>
                    </div>
                )}

                {!this.state.loading && !this.state.error && <button onClick={this.handleShowMore} type="button">
                    Показать еще </button>}




                <Pagination items={10} activePage={2} maxButtons={8} />


            </MainTemplateReg>
        );
    }
}

export default CharactersPage;

//
// {this.state.data.map(character => (
//     <div key={character.id}>
//         <h2><a href={`${"/infohero/"}${character.id}`}>{character.name}</a></h2>
//     </div>
// ))}


{/*<Tabs className='tab-demo z-depth-1'>*/}
    {/*<Tab title="Test 1">Test 1</Tab>*/}
    {/*<Tab title="Test 2" active>Test 2</Tab>*/}
    {/*<Tab title="Test 3">Test 3</Tab>*/}
    {/*<Tab title="Test 4">Test 4</Tab>*/}
{/*</Tabs>*/}