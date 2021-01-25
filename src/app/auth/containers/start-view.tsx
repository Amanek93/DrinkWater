import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import ActivityButton from '../../ui/components/ActivityButton';
import FormInput from '../../ui/components/FormInput';

// @ts-ignore
import { GLOBAL_COLORS } from '@ui/const';
// @ts-ignore
import { commonStyles, fontStyles } from '@ui';

type Props = {
    navigation: StackNavigationProp<any>;
};

const StartView = ({ navigation }: Props) => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

    const handleLogin = () => {
        setTimeout(() => {
            navigation.navigate('Home');
        }, 150);
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView style={commonStyles.padding}>
                <Text style={[styles.headerText, commonStyles.space_2em]}>Start Panel</Text>
                <FormInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    iconType="user"
                    keyboardType="email-address"
                    labelValue={email}
                    onChangeText={(userEmail) => {
                        setEmail(userEmail);
                    }}
                    placeholderText="Email"
                />
                <FormInput
                    iconType="lock"
                    labelValue={password}
                    onChangeText={(userPassword) => {
                        setPassword(userPassword);
                    }}
                    placeholderText="Password"
                    secureTextEntry
                />
                <View style={styles.ButtonContainer}>
                    <ActivityButton
                        color={GLOBAL_COLORS.violetRed}
                        onPress={handleLogin}
                        title="Let's log in!"
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
