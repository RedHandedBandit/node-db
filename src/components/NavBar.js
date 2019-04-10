import React from 'react';
import './NavBar.css'

const NavBar = (props) => {
    return (
        <div> 
            <nav className="nav_tag"> 
                <header className="header_navBar"> 
                    <img className="natgeo_logo" src="https://yt3.ggpht.com/a-/AAuE7mC3Qmod1HXht9gkxaGvkNteMLgzzuFlM0_npw=s900-mo-c-c0xffffffff-rj-k-no" alt="logo" />
                    <span className="title_span"> national geographic animal kingdom </span>
                </header>
                <div className="NavLinks"> 
                    <li onClick={() => props.yourList('Inventory')} > Inventory </li>
                    <li onClick={() => props.yourList('Your List')} > Your List </li>
                </div>
            </nav>
        </div>
    )
}

export default NavBar