import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import ErrorBoundary from "./components/ErrorBoundary.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
<ErrorBoundary>
<App />
</ErrorBoundary>
)
