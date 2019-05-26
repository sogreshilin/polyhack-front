import React, { Component } from 'react';

import styles from './MainPage.css';
import SearchForm from "../SearchForm/SearchForm";

class MainPage extends Component {
    state = {
        inputValue: '',
    }

    onInputChangeHandler = (event) => {
        event.preventDefault();

        const phrase = event.target.value;
        this.setState({
            inputValue: phrase,
        });
    }

    submitFormHandler = (event) => {
        event.preventDefault();

        const phrase = this.state.inputValue;
        if (!phrase) return;

        this.props.onSubmitForm(phrase);
        this.props.history.push('/suggestions');
    };

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
