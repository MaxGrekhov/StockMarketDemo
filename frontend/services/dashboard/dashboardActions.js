import * as api from './dashboardApi';
import * as types from 'services/types';
import * as loader from 'services/common/loaderActions';
import { tryGetMessage } from 'root/utils/errorHandler';

export function setPrice(model) {
    return {
        type: types.DASHBOARD_SETPRICE,
        model
    };
}

export function getPriceAsync(model) {
    return async (dispatch) => {
        try {
            dispatch(loader.wait(types.DASHBOARD_GETPRICEASYNC));
            const response = await api.getPrice();
            dispatch(setPrice(response));
            dispatch(loader.ok(types.DASHBOARD_GETPRICEASYNC));
        } catch (error) {
            dispatch(loader.error(types.DASHBOARD_GETPRICEASYNC, tryGetMessage(error)));
        }
    };
}
