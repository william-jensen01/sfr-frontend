import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/50ade133-d93b-4586-8cec-f0e82c7ead47_200x200.png';

function LandingPage () {
    return (
        <div className="landing">
            {/*NAVIGATION*/}
            {/* <div className="navigation">
                <div className="logo-container">
                    <img src={logo} alt="logo" className="logo"/>
                    <p className="logo-text">Secret Family Recipes</p>
                </div>
                <div className="nav-links">
                    <Link to='/' className="link">Home</Link>
                    <Link to='/about' className="link">About</Link>
                    <Link to ='/recipes' className="link">Recipes</Link>
                    <Link to='/register' className="nav-button">Sign Up</Link>
                </div>
            </div> */}


            <div className="section1">
                <div className="content">
                    <h1>Secret Family Recipes</h1>
                    <div className="landing-navigation">
                        <Link to="/about" className="landing-link">About</Link>
                        <Link to="/recipes" className="landing-link">Recipes</Link>
                        <Link to="/register" className="landing-link">Sign Up</Link>
                    </div>
                </div>
            </div>
            <div className="section2">
                <p>Anyone can go out and buy a cookbook these days, but I want a place to store all my secret family recipes, handed down from generation to generation.</p>
            </div>
            <div className="section3">
                <p>The little cards my grandma wrote the recipes on in her beautiful cursive are getting lost or are hard to read. I need somewhere secure to keep my recipes with me at all times!</p>
                <Link to='/register' className="CTA">Create an Account</Link>
            </div>
        </div>
    )
};
    
export default LandingPage;
