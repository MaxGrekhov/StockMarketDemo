import * as React from 'react';
import { connect } from 'react-redux';
import Spinner from './Spinner';
import Button from './Button';
import './RepeatPanel.scss';

class RepeatPanel extends React.Component {
    render() {
        const item = this.props.item;
        if (item && item.isWait) {
            return <Spinner />;
        }
        if (item && item.isError) {
            return (
                <div className="shared-repeatpanel-error">
                    <p className="title">Could not load data from the server.</p>
                    <p className="sub">Press repeat button to reload data.</p>
                    <Button onClick={this.props.action}>Repeat</Button>
                </div>
            );
        }
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps(store, ownProps) {
    return {
        ...ownProps,
        item: store.loader[ownProps.actionId]
    };
}

export default connect(mapStateToProps)(RepeatPanel);