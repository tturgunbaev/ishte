import React from 'react';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container">
                <a href="#home" className="navbar-brand">АРТХАУС 2025</a>
                <div className="navbar-menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#anonses" className="nav-link">Анонсы</a>
                        </li>
                        <li className="nav-item">
                            <a href="#main" className="nav-link">О проекте</a>
                        </li>
                        <li className="nav-item">
                            <a href="#painters" className="nav-link">Художники</a>
                        </li>
                        <li className="nav-item">
                            <a href="#galery" className="nav-link">Галерея работ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
