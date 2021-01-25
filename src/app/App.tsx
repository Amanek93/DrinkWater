import React, { useEffect, useState } from 'react';
import auth, { firebase } from '@react-native-firebase/auth';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { persistStore } from 'redux-persist';

import { AuthProvider } from './shared/utils/auth-provider';
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
        firebase.auth();
    }, []);

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);

    function onAuthStateChanged(user: any) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;

    return (
        <Provider store={store}>
            <AuthProvider>
                <NavigationContainer>
                    <Stack.Navigator headerMode={null} initialRouteName={user ? 'Home' : 'Start'}>
                        <Stack.Screen component={StartView} name="Start" />
                        <Stack.Screen component={HomeView} name="Home" />
                    </Stack.Navigator>
                </NavigationContainer>
            </AuthProvider>
        </Provider>
    );
};

export default App;
