import React, {useEffect, useState} from 'react'
import './AuthPage.css'
import { useHttp } from '../hooks/http.hook'

export const AuthPage = () => {
    const { loading, error, request } = useHttp()

    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        
    }, [error])

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const regiserHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form})
            console.log('Data', data)
        } catch (e) {}
    }

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
                                onChange={ changeHandler }
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
                                onChange={ changeHandler }
                            />
                            <label htmlFor="email">Password</label>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn deep-purple darken-1 card__form__login_btn"
                            disabled={ loading }
                        >
                            Sign In
                        </button>
                        <button
                            className="btn grey lighten-2 deep-purple-text"
                            onClick={ regiserHandler }
                            disabled={ loading }
                        >
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}