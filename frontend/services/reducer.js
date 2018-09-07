import { combineReducers } from 'redux';
import loader from './common/loaderReducer';
import dashboard from './dashboard/dashboardReducer';

const reducer = combineReducers({
    loader,
    dashboard
});

export default reducer;