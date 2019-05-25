import React, { Component } from 'react';
import { connect } from 'react-redux';

import Heading from '../../components/Heading/Heading';
import Suggestions from '../../components/Suggestions/Suggestions';

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
            <div>
                <h2>Extractor page</h2>
                <Heading 
                    onSubmitHandler={this.submitFormHandler}
                    onChange={this.onInputChangeHandler} />
                <Suggestions 
                    isLoading={this.props.isLoading} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    phrase: state.extractor.phrase,
    isLoading: state.extractor.isLoading,
})

const mapDispatchToProps = (dispatch) => ({
    onSubmitForm: (phrase) => dispatch(actions.findSuggestions(phrase))
});


export default connect(mapStateToProps, mapDispatchToProps)(Extractor);