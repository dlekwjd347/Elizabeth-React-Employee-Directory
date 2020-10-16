import React from 'react';
import "./style.css";
import SearchSection from "../SearchSection/search";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

       <div className="search-area col-4">
        <SearchSection />
    </div>
</nav>
    );
}
export default Nav;