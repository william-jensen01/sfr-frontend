import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Navigation ( {history} ) {
    const logout = () => {
        localStorage.removeItem('token');
        history.push('/');
    };

    return (
        <div className="navigation">
            <div className="logo-container">
                <p>Secret Family Recipes</p>
            </div>
            <div className="nav-links">
                <Link to='/' className="link">Home</Link>
                <Link to ='/about' className='link'>About</Link>
                <Link to='/recipes' className="link">Recipes</Link>
                <Link to='/add' className="link">New</Link>
                <button onClick={logout} className="nav-button">Logout</button>
            </div>
        </div>
    )
}

export default withRouter(Navigation);