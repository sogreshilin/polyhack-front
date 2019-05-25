import React from "react";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import SuggestionItem from "../../components/Suggestions/SuggestionItem/SuggestionItem";

import styles from './Suggestions.css';

class Suggestions extends React.Component {
    render() {
        if (this.props.isLoading) {
            return (
                <div className={styles.spinnerWrapper}>
                    <Spinner/>
                </div>
            );
        }

        const suggestions = this.props.videos.map(elem => {
                return (
                    <SuggestionItem
                        key={elem.id}
                        autoplay={elem.autoplay}
                        videoId={elem.id}
                        start={elem.start}
                        description={elem.dscr}/>);
            }
        );

        return (
            <div>
                <ul>
                    {suggestions}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.extractor.isLoading,
    videos: state.extractor.suggestedVideos,
});

export default connect(mapStateToProps)(Suggestions);

