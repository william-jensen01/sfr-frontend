import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import logo from '../assets/50ade133-d93b-4586-8cec-f0e82c7ead47_200x200.png';

function Navigation ( {history} ) {
    const logout = () => {
        localStorage.removeItem('token');
        history.push('/');
    };

    return (
        <div className="navigation">
            <div className="logo-container">
                {/* <img src={logo} alt="logo" className="logo"/> */}
                <p className="logo-text">Secret Family Recipes</p>
            </div>
            <div className="nav-links">
                <Link to='/' className="link">Home</Link>
                <Link to ='/about' className='link'>About</Link>
                <Link to='/recipes' className="link">Recipes</Link>
                <button onClick={logout} className="nav-button">Logout</button>
            </div>
        </div>
    )
}

export default withRouter(Navigation);