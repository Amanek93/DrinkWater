import HomeView from './home/containers/home-view';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { store } from './store/';

const rehydrateStore = () => {
    persistStore(store, null, () => {
        store.getState();
    });
};

const App = () => {
    useEffect(() => {
        rehydrateStore();
    }, []);

    return (
        <Provider store={store}>
            <HomeView />
        </Provider>
    );
};

export default App;
