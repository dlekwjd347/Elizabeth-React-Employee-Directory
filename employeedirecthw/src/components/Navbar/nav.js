import React from 'react';
import "./style.css";
import "../SearchSection/search";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

       <div className="search-area col-4">
        <searchName />
    </div>
</nav>
    );
}
export default Nav;