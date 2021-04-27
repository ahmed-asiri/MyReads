import React from 'react'
import ContentPadding from './ContentPadding'
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className="layout__nav">
            <ul>
            <ContentPadding>
                <li > <Link className="layout__nav--item" to="/search"> Search Books </Link></li>
                <li > <Link className="layout__nav--item" to="/"> Currently Reading </Link> </li>
                <li > <Link className="layout__nav--item" to="/"> Want to Read </Link> </li>
                <li > <Link className="layout__nav--item" to="/"> Read </Link> </li>
            </ContentPadding>
            </ul>
        </div>
    )
}

export default Navigation
