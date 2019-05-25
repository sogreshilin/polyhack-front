import React from 'react';
import Spinner from '../UI/Spinner/Spinner'

import SuggestionItem from './SuggestionItem/SuggestionItem';

const Suggestions = (props) => {
    if (props.isLoading) {
        return (
            <Spinner />
        );
    }

    const suggestions = props.videos.map(elem => {
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

export default Suggestions;
