import React from 'react'
import '../styles/Background.css';

export default function Background({ children }) {
    return (
        <div className="background-container" >
            <div className="background-content ">{children}</div>
        </div>
    )
}
