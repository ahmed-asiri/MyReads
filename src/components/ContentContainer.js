import React from 'react'

function ContentContainer({ children }) {
    return (
        <div className="layout__content">
            { children }
        </div>
    )
}

export default ContentContainer
