import React from 'react'
import './AuthPage.css'

export const AuthPage = () => {
    return (
        <div className="raw card__wrapper">
            <div className="card__c col s6 offset-s3">
                <h1 className="card__title_h1 deep-purple-text text-darken-2">Shorten your link</h1>
                <div className="card deep-purple lighten-3">
                    <div className="card-content white-text">
                        <span className="card-title card__header">Authorisation</span>
                        <div className="input-field">
                            <input
                                placeholder="Enter your email"
                                id="email"
                                type="text"
                                name="email"
                                className="card__form_input"
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input
                                placeholder="Enter your password"
                                id="password"
                                type="password"
                                name="password"
                                className="card__form_input"
                            />
                            <label htmlFor="email">Password</label>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn deep-purple darken-1 card__form__login_btn">Sign In</button>
                        <button className="btn grey lighten-2 deep-purple-text">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
