import React from 'react'

import './LinkCard.css'

export const LinkCard = ({ link }) => {
    return (
        <>
            <h3>Link</h3>
            <p>
                Your link:
                <a href={link.to} target="_blank" rel="noopener noreferrer">
                    {link.to}
                </a>
            </p>
            <p>
                From:
                <a href={link.from} target="_blank" rel="noopener noreferrer">
                    {link.from}
                </a>
            </p>
            <p>
                Number of clicks:
                <strong>{link.clicks}</strong>
            </p>
            <p>
                Creation date:
                <strong>{new Date(link.date).toLocaleDateString()}</strong>
            </p>
        </>
    )
}
