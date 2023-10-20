import React, { useState } from 'react';
import '../styles/Header.css';

function Header() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='header'>
            <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" className="main_logo" />
            </div>
            <div className='buttons'>

               

                <button className="signIn_button">Sign In</button>
            </div>
        </div>
    )
}

export default Header
