import React, { useEffect, useState } from 'react';
import '../styles/Nav.css';

function NavBar() {
    const [show, handleShow] = useState(false);

    //to make the black color is visible when user svrolls down
    useEffect(() => {
        const scrollListener = () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else {
                handleShow(false);
            }
        };

        window.addEventListener("scroll", scrollListener);

        return () => {
            window.removeEventListener("scroll", scrollListener);
        }

    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" className="nav_logo" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar Logo" className="nav_avatar" />
        </div>
    )
}

export default NavBar
