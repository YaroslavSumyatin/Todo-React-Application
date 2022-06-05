import "./search-panel.css";

const SearchPanel = () => {
    const searchPlaceholder = "type to search";
    return <input type="text" className="form-control search-input" 
        placeholder={searchPlaceholder}/>;
};

export default SearchPanel;