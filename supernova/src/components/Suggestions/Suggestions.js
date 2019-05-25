import React from 'react';

import SuggestionItem from './SuggestionItem/SuggestionItem';

const Suggestions = () => {
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
