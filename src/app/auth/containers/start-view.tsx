import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import ActivityButton from '../../ui/components/ActivityButton';
import FormInput from '../../ui/components/FormInput';

// @ts-ignore
import { GLOBAL_COLORS } from '@ui/const';
// @ts-ignore
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../../shared/utils/auth-provider';
import { commonStyles } from '@ui';

type Props = {
    navigation: StackNavigationProp<any>;
};

const StartView = ({ navigation }: Props) => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();
    const [registerMode, setRegisterMode] = useState<boolean>(false);
    const [user, setUser] = useState();
    const [isValid, setIsValid] = useState<boolean>(true);
    const [isConfirmValid, setIsConfirmValid] = useState<boolean>(true);

    // @ts-ignore
    const { register, login } = useContext(AuthContext);

    function onAuthStateChanged(user: any) {
        setUser(user);
    }

    useEffect(() => {
        if (user) {
            navigation.navigate('Home');
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
                    onEndEditing={(e) => handleValidPassword(e.nativeEvent.text)}
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
                        onEndEditing={(e) => handleValidConfirmPassword(e.nativeEvent.text)}
                        placeholderText="Confirm Password"
                        secureTextEntry
                    />
                ) : null}
                {!isConfirmValid && registerMode ? (
                    <Text style={styles.errorText}>Passwords do not match!</Text>
                ) : null}
                <View style={styles.ButtonContainer}>
                    <ActivityButton
                        color={GLOBAL_COLORS.dodgerBlue}
                        onPress={handleLogin}
                        title={registerMode ? 'Go to login' : "Let's log in!"}
                    />
                </View>

                <View style={styles.ButtonContainer}>
                    <ActivityButton
                        color={GLOBAL_COLORS.violetRed}
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
        color: GLOBAL_COLORS.violetRed,
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

export default StartView;
