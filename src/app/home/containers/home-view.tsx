import React, { useContext, useEffect, useState } from 'react';
import { Dispatch } from 'redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { connect } from 'react-redux';

import { ActionDispatcher, AppState } from '@store/models';
import { ClearProgress, DrinkWater } from '../actions';
import { globalColors } from '@ui/const';
import { commonStyles, fontStyles } from '@ui';
import { getDrunkWater } from '../selectors';

import ActivityButton from '../../ui/components/ActivityButton';
import AnimatedProgressBar from '../../ui/components/AnimatedProgressBar';
import auth from '@react-native-firebase/auth';
import { AuthContext } from '../../shared/utils/auth-provider';

interface Props {
    clear: ActionDispatcher<ClearProgress>;
    drink: ActionDispatcher<DrinkWater>;
    drunkWater: number;
    navigation: StackNavigationProp<any>;
}

const HomeView = ({ clear, drink, drunkWater, navigation }: Props) => {
    const [user, setUser] = useState('used');
    const dailyWaterLimit = 2500;
    const { logout } = useContext(AuthContext);

    function onAuthStateChanged(user: any) {
        setUser(user);
    }

    const handleLogoutButton = () => {
        logout();
        auth().onAuthStateChanged(onAuthStateChanged);
    };

    useEffect(() => {
        if (!user) {
            setUser('');
            setTimeout(() => {
                navigation.navigate('Start');
            }, 1000);
        }
    }, [user]);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView style={commonStyles.padding}>
                {/*<Text style={[styles.headerText, commonStyles.space_2em]}>Welcome {user.uid}</Text>*/}
                <Text style={[styles.headerText, commonStyles.space_2em]}>
                    Each of us needs
                    <Text style={fontStyles.highlighted}> 2.5 liters </Text>
                    of water a day!
                </Text>
                <Text style={[fontStyles.regular, fontStyles.align]}>
                    Your progress today: {drunkWater} / {dailyWaterLimit} ml
                </Text>
                <AnimatedProgressBar current={drunkWater} max={dailyWaterLimit} />
                <View style={styles.buttonContainer}>
                    <ActivityButton
                        color={globalColors.dodgerBlue}
                        onPress={drink}
                        title="Drink a cup!"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <ActivityButton
                        color={globalColors.violetRed}
                        onPress={clear}
                        title="Clear progress"
                    />
                </View>
                <View style={styles.logoutButton}>
                    <ActivityButton
                        color={globalColors.violetRed}
                        onPress={handleLogoutButton}
                        title="Logout"
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
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
    logoutButton: {
        alignSelf: 'center',
        marginTop: '20%',
    },
    mainContainer: {
        alignItems: 'center',
        flex: 1,
    },
});

const mapStateToProps = (state: AppState) => ({
    drunkWater: getDrunkWater(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    clear: () => dispatch(new ClearProgress()),
    drink: () => dispatch(new DrinkWater()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
