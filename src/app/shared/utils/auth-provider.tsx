import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';

import { showToastMessage } from './show-toast-message';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                    } catch (e) {
                        console.log(e);
                        showToastMessage('Bad password or user does not exist');
                    }
                },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password);
                    } catch (e) {
                        console.log(e);
                        showToastMessage('E-mail has been used or it is empty');
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.log(e);
                        showToastMessage('Something get wrong');
                    }
                },
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
