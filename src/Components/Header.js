import React from 'react'
import {Link} from 'react-router-dom'
import Logo from '../assets/logo.png'
import Search from '../assets/search_icon.png'
import Cart from '../assets/shop_icon.png'

const Header = () => {
    return (
        <div className="site-header">
            <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand logo_h" to="/">
                        <img src={Logo} alt="logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav ml-auto">
                           <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                           </li>
                           <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                           </li>
                           <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                           </li>
                           <li className="nav-item">
                                <Link className="nav-link" to="/"><img src={Search} alt="icon" /></Link>
                           </li>
                           <li className="nav-item">
                                <Link className="nav-link" to="/cart"><img src={Cart} alt="icon" /></Link>
                           </li>
                        </ul>
                    </div>
            </nav>
            </div>
        </div>
    )
}

export default Header;
