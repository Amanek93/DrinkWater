import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import ActivityButton from '../../ui/components/ActivityButton';

// @ts-ignore
import { GLOBAL_COLORS } from '@ui/const';
// @ts-ignore
import { commonStyles, fontStyles } from '@ui';

type Props = {
    navigation: StackNavigationProp<any>;
};

const StartView = ({ navigation }: Props) => {
    const handleLogin = () => {
        setTimeout(() => {
            navigation.navigate('Home');
        }, 150);
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView style={commonStyles.padding}>
                <Text style={[styles.headerText, commonStyles.space_2em]}>Start Panel</Text>
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
