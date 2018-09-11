import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from 'services/home/homeActions';
import * as types from 'services/types';
import Button from 'components/shared/Button';

class Page extends React.Component {
    sendMessage() {
        this.props.actions.sendMessageAsync(this.props.item.user, this.props.item.message);
    }

    onChange(field, value) {
        this.props.actions.setItem({ ...this.props.item, [field]: value });
    }

    render() {
        console.log("render", this.props.messages, this.props.users)
        return (
            <div>
                <p>User: <input type="text" value={this.props.item.user} onChange={e => this.onChange('user', e.target.value)} /></p>
                <p>Message: <input type="text" value={this.props.item.message} onChange={e => this.onChange('message', e.target.value)} /></p>
                <Button onClick={() => this.sendMessage()}>Send</Button>
                <table>
                    <tbody>
                        {this.props.messages.map((x, i) => <tr key={i}><td>{x.user}</td><td>{x.text}</td></tr>)}
                    </tbody>
                </table>
                <ul>
                    {this.props.users.map((x, i) => <li key={i}>{x.name}</li>)}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        item: state.home.item,
        messages: state.home.messages,
        users: state.home.users,
        itemState: state.loader[types.HOME_SENDMESSAGEASYNC]
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(homeActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Page);