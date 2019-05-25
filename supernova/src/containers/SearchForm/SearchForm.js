import React from "react";
import Form from "../../components/Form/Form";
import * as actions from "../../store/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import styles from "./SearchForm.css";

class SearchForm extends React.Component {
    onInputChangeHandler = (event) => {
        this.props.onQueryChanged(event.target.value)
    };

    submitFormHandler = (event) => {
        event.preventDefault();

        const phrase = this.props.query;
        if (!phrase) {
            return;
        }

        this.props.onSubmitForm(phrase);
        this.props.history.push('/suggestions');
    };

    render() {
        return (
            <div className={styles.formWrapper}>
                <Form
                    title='Find videos related to typed phrase'
                    placeholder='Enter phrase'
                    value={this.props.query}
                    onChange={this.onInputChangeHandler}
                    onSubmit={this.submitFormHandler}
                    btnText='Find'
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    query: state.extractor.query,
    phrase: state.extractor.phrase,
    isLoading: state.extractor.isLoading,
    suggestedVideos: state.extractor.suggestedVideos,
});

const mapDispatchToProps = (dispatch) => ({
    onQueryChanged: query => dispatch(actions.updateSearchQuery(query)),
    onSubmitForm: phrase => dispatch(actions.findSuggestions(phrase))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchForm));


