import React, {useCallback, useEffect, useState} from 'react'
import { useHttp } from '../hooks/http.hook'
import { AuthContext } from '../context/AuthContext'
import {Loader} from "../components/Loader/Loader";

export const LinksPage = () => {
    const [links, setLinks] = useState([])
    const { loading, request } = useHttp()
    const { token } = AuthContext

    const fetchLinks = useCallback(async () => {
        try {
            const fetched = request('/api/link', 'GET', null, {
                Authorization: token
            })
            setLinks(fetched)
        } catch (e) {}
    }, [token, request])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks])

    if (loading) {
        return <Loader />
    }

    return (
        <>
            {!loading && <LinksList links={links}/>}
        </>
    )
}
