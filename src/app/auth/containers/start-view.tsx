import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import Toast from 'react-native-simple-toast';

import { ActionDispatcher, AppState } from '@store/models';
import { getUsers } from '../selectors';
import { AddUser } from '../actions';

import ActivityButton from '../../ui/components/ActivityButton';
import FormInput from '../../ui/components/FormInput';
import {AuthForm} from "../models/authForm";


// @ts-ignore
import { globalColors } from '@ui/const';
// @ts-ignore
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../../shared/utils/auth-provider';
import { commonStyles } from '@ui';
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {User} from "../models/user";

type Props = {
    navigation: StackNavigationProp<any>;
    addUser: ActionDispatcher<AddUser>;
    userDatabase: Array<User>;
};

const StartView = ({ navigation, addUser, userDatabase }: Props) => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [registerMode, setRegisterMode] = useState<boolean>(false);
    const [user, setUser] = useState(null);
    const [isValid, setIsValid] = useState<boolean>(true);
    const [isConfirmValid, setIsConfirmValid] = useState<boolean>(true);

    // @ts-ignore
    const { register, login } = useContext(AuthContext);

    function onAuthStateChanged(user: any) {
        setUser(user);
    }
//TODO: tutaj dopisać tworzenie nowego usera w database ADD_USER
    useEffect(() => {
        if (user) {
            if (userDatabase.find(element => element.email === user.email)) {
                Toast.show('Zalogowano pomyślnie.');
                navigation.navigate('Home');
            } else {
                Toast.show('Dodano użytkownika do bazy.');
                addUser({email: email, password: password});
                navigation.navigate('Home');
            }
        }
    }, [user]);

    const handleLogin = () => {
        if (!registerMode) {
            login(email, password);
            auth().onAuthStateChanged(onAuthStateChanged);
        } else setRegisterMode(false);
    };

    const handleRegister = () => {
        if (registerMode) {
            register(email, password);
            auth().onAuthStateChanged(onAuthStateChanged);
        } else setRegisterMode(true);
    };

    const handleValidPassword = (value: string) => {
        if (value.length >= 8) {
            setIsValid(true);
        } else setIsValid(false);
    };

    const handleValidConfirmPassword = (value: string) => {
        if (value === password) {
            setIsConfirmValid(true);
        } else setIsConfirmValid(false);
    };

    // @ts-ignore
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView style={commonStyles.padding}>
                <Text style={[styles.headerText, commonStyles.space_2em]}>
                    {registerMode ? 'Register Panel' : 'Login Panel'}
                </Text>
                <FormInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    iconType="user"
                    keyboardType="email-address"
                    labelValue={email}
                    onChangeText={(userEmail: string) => {
                        setEmail(userEmail);
                    }}
                    placeholderText="Email"
                />
                <FormInput
                    iconType="lock"
                    labelValue={password}
                    onChangeText={(userPassword: string) => {
                        setPassword(userPassword);
                        handleValidPassword(userPassword);
                    }}
                    onEndEditing={(e:any) => handleValidPassword(e.nativeEvent.text)}
                    placeholderText="Password"
                    secureTextEntry
                />
                {!isValid ? (
                    <Text style={styles.errorText}>
                        The password must be at least 8 characters long.
                    </Text>
                ) : null}
                {registerMode ? (
                    <FormInput
                        iconType="lock"
                        labelValue={confirmPassword}
                        onChangeText={(userConfirmPassword: string) => {
                            setConfirmPassword(userConfirmPassword);
                            handleValidConfirmPassword(userConfirmPassword);
                        }}
                        onEndEditing={(e:any) => handleValidConfirmPassword(e.nativeEvent.text)}
                        placeholderText="Confirm Password"
                        secureTextEntry
                    />
                ) : null}
                {!isConfirmValid && registerMode ? (
                    <Text style={styles.errorText}>Passwords do not match!</Text>
                ) : null}
                <View style={styles.ButtonContainer}>
                    <ActivityButton
                        color={globalColors.dodgerBlue}
                        onPress={handleLogin}
                        title={registerMode ? 'Go to login' : "Let's log in!"}
                    />
                </View>

                <View style={styles.ButtonContainer}>
                    <ActivityButton
                        color={globalColors.violetRed}
                        onPress={handleRegister}
                        title={registerMode ? 'Sign up!' : 'Go to register'}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    ButtonContainer: {
        alignSelf: 'center',
    },
    errorText: {
        color: globalColors.violetRed,
    },
    headerText: {
        alignItems: 'center',
        fontSize: 24,
        fontWeight: '300',
        justifyContent: 'center',
        marginVertical: 60,
        textAlign: 'center',
    },
    mainContainer: {
        alignItems: 'center',
        flex: 1,
    },
});

const mapStateToProps = (state: AppState) => ({
    userDatabase: getUsers(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addUser: (userData: AuthForm) => dispatch(new AddUser(userData)),

});

export default connect(mapStateToProps, mapDispatchToProps)(StartView);
