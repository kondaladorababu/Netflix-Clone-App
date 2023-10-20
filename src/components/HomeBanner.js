import React, { Fragment } from 'react';
import '../styles/HomeBanner.css'
import Header from './Header';

function HomeBanner() {
    return (
        <Fragment>
            <header className="home_page" style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg")`,
                backgroundPosition: "center center",
            }}
            >
                <Header />
                <div className="home_banner">
                    <div className="info">
                        <h1 className="our-story-card-title" data-uia="hero-title">Unlimited movies, TV shows and more from ₹149.</h1>
                        <h2 className="our-story-card-subtitle" data-uia="our-story-card-subtitle">Join today. Cancel anytime.</h2>
                        <div className="input_group">
                            <h3 className="email-form-title">Ready to watch? Enter your email to create or restart your membership.</h3>
                            <div className='email_input'>
                                <input type="text" className="form-control" placeholder="Email Address" />
                                <button className="input-group-button btn-danger text-white">Get Started </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header >
        </Fragment>
    )

}

export default HomeBanner
