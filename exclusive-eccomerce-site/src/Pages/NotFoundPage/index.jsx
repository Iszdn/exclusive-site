import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
const NotFound = () => {
  return (
    <div id='notfound'>
        <h2>404 Not Found</h2>
        <p>Your visited page not found. You may go home page.</p>
        <div className="btn">
            <Link to={"/"}>Back to home page</Link>
        </div>
    </div>
  )
}

export default NotFound