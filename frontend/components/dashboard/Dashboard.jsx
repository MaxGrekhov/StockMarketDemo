import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as dashboardActions from 'services/dashboard/dashboardActions';
import RepeatPanel from 'components/shared/RepeatPanel';
import * as types from 'services/types';

class Page extends React.Component {


    getData() {
        this.props.actions.getPriceAsync();
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div>
                <div>APP PAGE</div>
                <RepeatPanel actionId={types.DASHBOARD_GETPRICEASYNC} action={() => this.getData()}>
                    <div>{JSON.stringify(this.props.model)}</div>
                </RepeatPanel>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        model: state.dashboard.model
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