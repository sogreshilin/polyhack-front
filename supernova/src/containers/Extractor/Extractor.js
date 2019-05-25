import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './Extractor.css';

import * as actions from '../../store/actions/index';
import Form from "../../components/Form/Form";

class Extractor extends Component {
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
                    <Form
                        title='Find videos related to typed phrase'
                        placeholder='Enter phrase'
                        onChange={this.onInputChangeHandler}
                        onSubmit={this.submitFormHandler}
                        btnText='Find'
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    phrase: state.extractor.phrase,
    isLoading: state.extractor.isLoading,
    suggestedVideos: state.extractor.suggestedVideos,
})

const mapDispatchToProps = (dispatch) => ({
    onSubmitForm: (phrase) => dispatch(actions.findSuggestions(phrase))
});


export default connect(mapStateToProps, mapDispatchToProps)(Extractor);
