import * as React from 'react';
import { Link } from 'react-router-dom';

import './AppHeader.scss';

export default class AppHeader extends React.Component {

    render() {
        return (
            <div className="app-header">
                <Link to="/" className="item">Home</Link>
                <Link to="/dashboard" className="item">Dashboard</Link>
            </div>
        );
    }
}