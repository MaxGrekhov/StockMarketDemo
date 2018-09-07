import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './AsyncComponent.scss';

const AsyncComponent = (importComponent) => {
    return class extends React.Component {
        state = {
            component: null
        }

        componentDidMount() {
            importComponent()
                .then((cmp) => {
                    this.setState({ component: cmp.default });
                });
        }

        render() {
            const C = this.state.component;
            return C ? <C {...this.props} /> : this.renderSpinner();
        }

        renderSpinner() {
            return (
                <div className="async-component-spinner">
                    <div className="container">
                        <div><FontAwesomeIcon icon='spinner' spin /> </div>
                        <div>Loading...</div>
                    </div>
                </div>
            );
        }
    }
};

export default AsyncComponent;