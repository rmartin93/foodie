import { useState } from "react";

const AutoComplete = ({ suggestions }) => {
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [input, setInput] = useState("");

    const options = suggestions.results
    
    const onChange = (e) => {
        const userInput = e.target.value;
    
        // Filter our suggestions that don't contain the user's input
        const unLinked = options.filter(
            (suggestion) =>
                suggestion.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1
        );
    
        setInput(e.target.value);
        setFilteredSuggestions(unLinked);
        setActiveSuggestionIndex(0);
        setShowSuggestions(true);
    };

    const onClick = (e) => {
        setFilteredSuggestions([]);
        setInput(e.target.innerText);
        setActiveSuggestionIndex(0);
        setShowSuggestions(false);
        console.log(e.target.id)
    };

    const SuggestionsListComponent = () => {
        return filteredSuggestions.length ? (
            <ul className="suggestions">
                {filteredSuggestions.map((suggestion, index) => {
                    let className;
                    // Flag the active suggestion with a class
                    if (index === activeSuggestionIndex) {
                        className = "suggestion-active";
                    }
                    return (
                        <li className={className} id={suggestion.id} key={suggestion.id} onClick={onClick}>
                            {suggestion.title}
                        </li>
                    );
                })}
            </ul>
        ) : (
            <div className="no-suggestions">
                <em>No suggestions, you're on your own!</em>
            </div>
        );
    };  

    return (
        <div className="autocomplete-container">
            <input
                type="text"
                onChange={onChange}
                // onKeyDown={onKeyDown}
                value={input}
                className="autocomplete-input"
            />
            {showSuggestions && input && <SuggestionsListComponent />}
        </div>
    );
};

export default AutoComplete;