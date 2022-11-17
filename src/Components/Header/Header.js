import { signOut } from "firebase/auth";
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import logo from '../../images/Logo.svg';
import "./Header.css";

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    
    console.log(user);
    const handleSignOut = () =>{
        signOut(auth)
        .then(()=>{})
    }
    return (
        <nav className='ema-john-navbar'>
            <div className="ema-john-logo">
                <Link to='/'>
                <img src={logo} alt="Logo" />
                </Link>
            </div>
            <div className="ema-john-navigation">
                <Link to="/shop">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/order-review">Order Review</Link>
                <Link to="/manage-inventory">Manage Inventory</Link>
                {!user?<Link to="/login">Login</Link>
                : <button className="logout-btn" onClick={handleSignOut}>LogOut</button>
                }
            </div>
        </nav>
    );
};

export default Header;