import React from 'react'
import ContentPadding from './ContentPadding'
import { Link } from 'react-router-dom';

function Navigation({ onShelfChange }) {
    return (
        <div className="layout__nav">
            <ul>
            <ContentPadding>
                <li > <Link className="layout__nav--item" to="/search"> Search Books </Link></li>
                <li > <Link className="layout__nav--item" onClick={() => onShelfChange('currentlyReading')} to="/"> Currently Reading </Link> </li>
                <li > <Link className="layout__nav--item" onClick={() => onShelfChange('wantToRead')} to="/"> Want to Read </Link> </li>
                <li > <Link className="layout__nav--item" onClick={() => onShelfChange('read')} to="/"> Read </Link> </li>
            </ContentPadding>
            </ul>
        </div>
    )
}

export default Navigation
