import React, { createContext, useState, ReactNode } from 'react';
import auth from '@react-native-firebase/auth';

import { showToastMessage } from './show-toast-message';

export const AuthContext = createContext(null);

interface IProps {
    children: ReactNode;
    // any other props that come into the component
}

export const AuthProvider = ( { children }: IProps ) => {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email: string, password: string) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                    } catch (e) {
                        console.log(e);
                        showToastMessage('Bad password or user does not exist');
                    }
                },
                register: async (email: string, password: string) => {
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
