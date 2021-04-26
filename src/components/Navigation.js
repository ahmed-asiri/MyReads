import React from 'react'
import ContentPadding from './ContentPadding'

function Navigation() {
    return (
        <div className="layout__nav">
            <ul>
            <ContentPadding>
                <li className="layout__nav--item">Home</li>
                <li className="layout__nav--item">Currently Reading</li>
                <li className="layout__nav--item">Want to Read</li>
                <li className="layout__nav--item">Read</li>
            </ContentPadding>
            </ul>
        </div>
    )
}

export default Navigation
