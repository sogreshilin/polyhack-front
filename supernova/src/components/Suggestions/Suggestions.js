import React from 'react';
import Spinner from '../UI/Spinner/Spinner'

import SuggestionItem from './SuggestionItem/SuggestionItem';

const Suggestions = (props) => {
    if (props.isLoading) {
        return (
            <Spinner />
        );
    }

    return (
        <div>
            <ul>
                <SuggestionItem>Видео 1</SuggestionItem>
                <SuggestionItem>Видео 2</SuggestionItem>
                <SuggestionItem>Видео 3</SuggestionItem>
            </ul>
        </div>
    )
}

export default Suggestions;
