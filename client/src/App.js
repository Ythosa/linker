import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes'
import 'materialize-css'

function App() {
    const routes = useRoutes(false)
    return (
        <Router>
            <h1 className="container">
                { routes }
            </h1>
        </Router>
    )
}

export default App
