import React, { useEffect, useState } from 'react';
import '../../styles/NavBar.css'
import { useNavigate } from 'react-router-dom';

function NavBar() {
    const [show, handleShow] = useState(false);
    const history = useNavigate();

    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    //to make the black color is visible when user svrolls down
    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar);

        return () => {
            window.removeEventListener("scroll", transitionNavBar);
        }

    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <div className="nav_contents">
                <img onClick={() => history('/')} src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" className="nav_logo" />
                <img onClick={() => history("/profile")} src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar Logo" className="nav_avatar" />
            </div>
        </div>
    )
}

export default NavBar
