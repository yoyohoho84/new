import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BtnHeader from "../BtnHeader";

/* Pagination Component
-------------------------------------------------*/

// const propTypes = {
//     items: React.PropTypes.array.isRequired,
//     onChangePage: React.PropTypes.func.isRequired,
//     initialPage: React.PropTypes.number
// };



// const defaultProps = {
//     initialPage: 1
// };

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }

    componentWillMount() {
        // set page if items array isn't empty
        // установить страницу, если массив элементов не пуст
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // reset page if items array has changed
        // сбросить страницу, если массив элементов изменился
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }

    setPage(page) {
        var items = this.props.items;
        var pager = this.state.pager;

        if (page < 1 || page > pager.totalPages) {
            return;
        }

        // get new pager object for specified page
        // получить новый объект пейджера для указанной страницы
        pager = this.getPager(items.length, page);

        // get new page of items from items array
        // получить новую страницу элементов из массива элементов
        let pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

        // update state
        // состояние обновления
        this.setState({ pager: pager });

        // call change page function in parent component
        // функция изменения вызова в родительском компоненте
        this.props.onChangePage(pageOfItems);
    }

    getPager(totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        pageSize = pageSize || 10;

        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);

        let startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        let pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        let pager = this.state.pager;

        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }

        return (
            <ul className="pagination">
                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(1)}>First</a>
                </li>
                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
                </li>
                {pager.pages.map((page, index) =>
                    <li key={index} className={pager.currentPage === page ? 'active' : ''}>
                        <a onClick={() => this.setPage(page)}>{page}</a>
                    </li>
                )}
                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
                </li>
                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
                </li>
            </ul>
        );
    }
}


Pagination.propTypes = {
    items: PropTypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number
};


Pagination.defaultProps = {
    initialPage: 1
};



// Pagination.propTypes = propTypes;
// Pagination.defaultProps = defaultProps;
// ssh key
// сгенерировать 2 ключа - приватный и публичный
// добавить свой публичный ключи на гитхаб и затем перезайти
// ssot брать пейдж из ройтера
// link to= {} вместо ссылка href
// <link to="/info">ссылка</link>
// аписать цикл фор который отрисовывает линки по формуле количество героев делим на кол-во на страничке
// <link to={{pathname: '/info', search: 'page=1'}}>ссылка</link>    на выходе  /path?page=1
// qs.stringify({page: i, sort: ''})
//  ветку 2 добавить в в ветку мастер (pullrequest)
/// git checkout master - вернуться в ветку мастер
// git checkout -b название новой ветки
// замержить в основную ветку
// it mersch master - хочу все изменения забрать из мастера
// git-scm обучение работе в гите
// все что делаем отдельными ветками


export default Pagination;
