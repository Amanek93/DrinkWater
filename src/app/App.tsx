
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeView from "./home/containers/home-view";



const App = () => {
    return (
        <SafeAreaProvider>
<HomeView/>
        </SafeAreaProvider>
    );
};

export default App;
