import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from 'services/reducer';

function configureStore(initialState) {
    return createStore(
        reducer,
        initialState,
        compose(
            applyMiddleware(thunk)
        )
    );
}

const store = configureStore();
export default store;