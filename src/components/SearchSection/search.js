import React, { useContext } from "react";
import DataAreaHook from '../../utils/dataHook';
import "./style.css"

const SearchSection = () => {
    const hook = useContext(DataAreaHook);

    return (
        <div className="searchbox">
            <form className="form-inline">
                <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={e => hook.handleSearchChange(e)}
                />
                <button className="btn my-2 my-sm-0" type="submit">
                    Search
                 </button>
            </form>
        </div>
    );
}
export default SearchSection;