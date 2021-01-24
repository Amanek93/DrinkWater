import React from 'react';
import { Dispatch } from 'redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { ActionDispatcher, AppState } from '@store/models';
import { ClearProgress, DrinkWater } from '../actions';
import { GLOBAL_COLORS } from '@ui/const';
import { commonStyles, fontStyles } from '@ui';
import { getDrunkWater } from '../selectors';

import ActivityButton from '../../ui/components/ActivityButton';
import ProgressBar from '../../ui/components/ProgressBar';

interface Props {
    clear: ActionDispatcher<ClearProgress>;
    drink: ActionDispatcher<DrinkWater>;
    drunkWater: number;
}

const HomeView = ({ clear, drink, drunkWater }: Props) => {
    const dailyWaterLimit = 2500;

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView style={commonStyles.padding}>
                <Text style={[styles.headerText, commonStyles.space_2em]}>
                    Each of us needs
                    <Text style={fontStyles.highlighted}> 2.5 liters </Text>
                    of water a day!
                </Text>
                <Text style={[fontStyles.regular, fontStyles.align]}>
                    Your progress today: {drunkWater} / {dailyWaterLimit} ml
                </Text>
                <ProgressBar current={drunkWater} max={dailyWaterLimit} />
                <View style={styles.ButtonContainer}>
                    <ActivityButton
                        color={GLOBAL_COLORS.dodgerBlue}
                        onPress={drink}
                        title="Drink a cup!"
                    />
                </View>
                <View style={styles.ButtonContainer}>
                    <ActivityButton
                        color={GLOBAL_COLORS.violetRed}
                        onPress={clear}
                        title="Clear progress"
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

const mapStateToProps = (state: AppState) => ({
    drunkWater: getDrunkWater(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    clear: () => dispatch(new ClearProgress()),
    drink: () => dispatch(new DrinkWater()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
