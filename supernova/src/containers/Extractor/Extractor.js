import React, { Component } from 'react';
import { connect } from 'react-redux';

import Heading from '../../components/Heading/Heading';
import Suggestions from '../../components/Suggestions/Suggestions';

import styles from './Extractor.css';

import * as actions from '../../store/actions/index';

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

        console.log(phrase);
        this.props.onSubmitForm(phrase)
    }

    render() {
        return (
            <div className={styles.Extractor}>
                <Heading 
                    onSubmitHandler={this.submitFormHandler}
                    onChange={this.onInputChangeHandler} />
                {/* <Suggestions 
                    isLoading={this.props.isLoading}
                    videos={this.props.suggestedVideos} /> */}
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