import { CardGiftcard, Notifications, Search } from '@material-ui/icons';
import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 20) {
                handleShow(true);
            } 
            else { 
                handleShow(false); 
            };
        });
        return () => {
            window.removeEventListener("scroll")
        };
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img className="nav__logo" alt="Netflix Logo" src="https://pmcvariety.files.wordpress.com/2020/05/netflix-logo.png?w=1024" />
            <div className="nav__topics">
                <span className="nav__link">Home</span>
                <span className="nav__link">TV Shows</span>
                <span className="nav__link">Movies</span>
                <span className="nav__link">Latest</span>
                <span className="nav__link">My List</span>
            </div>
            <div className="nav__icons">
                <Search style={{ fontSize: 30 }} className="nav__icon" />
                <CardGiftcard style={{ fontSize: 30 }}  className="nav__icon" />
                <Notifications style={{ fontSize: 30 }} className="nav__icon" />
            </div>
            <img className="nav__avatar" alt="Netflix Logo" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png" />
        </div>
    )
}

export default Nav
