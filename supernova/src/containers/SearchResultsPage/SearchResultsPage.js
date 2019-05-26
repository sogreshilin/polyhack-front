import React from "react";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import SuggestionItem from "../../components/Suggestions/SuggestionItem/SuggestionItem";

import styles from './SearchResultsPage.css';
import Form from "../../components/Form/Form";
import SearchForm from "../SearchForm/SearchForm";

class SearchResultsPage extends React.Component {
    render() {
        const suggestions = this.props.videos.map(elem => {
                return (
                    <SuggestionItem
                        src={elem.src}
                        key={elem.id}
                        autoplay={elem.autoplay}
                        videoId={elem.id}
                        start={elem.start}
                        description={elem.dscr}/>);
            }
        );

        return (
            <div>
                <SearchForm/>
                {
                    this.props.isLoading
                        ? <div className={styles.spinnerWrapper}>
                            <Spinner/>
                        </div>
                        : <ul>
                            {suggestions}
                        </ul>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.extractor.isLoading,
    videos: state.extractor.suggestedVideos,
});

export default connect(mapStateToProps)(SearchResultsPage);

