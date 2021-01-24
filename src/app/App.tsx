import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { persistStore } from 'redux-persist';

import { store } from './store/';

import HomeView from './home/containers/home-view';
import StartView from './auth/containers/start-view';

const rehydrateStore = () => {
    persistStore(store, null, () => {
        store.getState();
    });
};

const Stack = createStackNavigator();

const App = () => {
    useEffect(() => {
        rehydrateStore();
    }, []);

    // @ts-ignore
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator headerMode={null} initialRouteName="Start">
                    <Stack.Screen component={StartView} name="Start" />
                    <Stack.Screen component={HomeView} name="Home" />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default App;
