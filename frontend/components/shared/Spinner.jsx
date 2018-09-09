import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Spinner.scss';

export default class Spinner extends React.Component {
    render() {
        return (
            <div className="shared-spinner">
                <div className="container">
                    <div><FontAwesomeIcon icon='spinner' spin /> </div>
                    <div>Loading...</div>
                </div>
            </div>
        );
    }
}