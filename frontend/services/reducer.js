import { combineReducers } from 'redux';
import loader from './common/loaderReducer';
import dashboard from './dashboard/dashboardReducer';
import home from './home/homeReducer';

const reducer = combineReducers({
    home,
    loader,
    dashboard
});

export default reducer;