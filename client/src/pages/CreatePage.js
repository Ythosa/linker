import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'

import './CreatePage.css'

export const CreatePage = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)
    const { request } = useHttp()
    const [link, setLink] = useState('')

    useEffect(() => {
        window.M.updateTextFields()
    }, [])

    const pressHandler = async event => {
        if (event.key === 'Enter') {
            try {
                const data = await request(
                    '/api/link/generate',
                    'POST',
                    {
                        from: link
                    },
                    {
                        Authorization: `Bearer ${auth.token}`
                    }
                )
                history.push(`/detail/${data.link._id}`)
            } catch (e) {}
        }
    }

    return (
        <div className="row">
            <div className="col s8 offset-s2 form_wrapper">
                <div className="input-field col s12">
                    <i className="material-icons prefix">link</i>
                    <input
                        id="email"
                        type="text"
                        value={ link }
                        className="create_form_input"
                        onChange={ e => setLink(e.target.value) }
                        onKeyPress={ pressHandler }
                    />
                    <label htmlFor="email">Enter the link</label>
                </div>
            </div>
        </div>
    )
}
