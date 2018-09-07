import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dashboardActions from 'services/dashboard/dashboardActions';

class Page extends React.Component {

    componentDidMount() {
        this.props.actions.getPriceAsync();
    }

    render() {
        console.log(this.props.model);
        return (
            <div>
                <div>APP PAGE</div>
                <div>{JSON.stringify(this.props.model)}</div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        model: state.dashboard.model,
        loader: state.loader
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(dashboardActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Page);