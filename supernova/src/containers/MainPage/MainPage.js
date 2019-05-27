import React, { Component } from 'react';

import styles from './MainPage.css';
import SearchForm from "../SearchForm/SearchForm";

class MainPage extends Component {
    render() {
        return (
            <div>
                <div className={styles.Extractor}>
                    <SearchForm/>
                </div>
            </div>
        )
    }
}

export default MainPage;
