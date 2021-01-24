import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import ActivityButton from '../../ui/components/ActivityButton';
import ProgressBar from '../../ui/components/ProgressBar';
// @ts-ignore
import { GLOBAL_COLORS } from '@ui/const';
// @ts-ignore
import { commonStyles, fontStyles } from '@ui';

const HomeView = () => {
    return (
        <SafeAreaView style={styles.mainContainer}>
            <ScrollView>
                <View style={styles.ButtonContainer}>
                    <ActivityButton
                        color={GLOBAL_COLORS.dodgerBlue}
                        onPress={() => {
                            console.warn('Drinked');
                        }}
                        title="Drink a cup!"
                    />
                </View>
                <Text style={[styles.headerText, commonStyles.space_2em]}>
                    Each of us needs
                    <Text style={fontStyles.highlighted}> 2.5 liters </Text>
                    of water a day!
                </Text>
                <Text style={[fontStyles.regular, fontStyles.align]}>
                    Your progress today: {100} / 2500 ml
                </Text>
                <ProgressBar current={30} />

                <View style={styles.ButtonContainer}>
                    <ActivityButton
                        color={GLOBAL_COLORS.violetRed}
                        onPress={() => {
                            console.warn('Cleared');
                        }}
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
        textAlign: 'center',
    },
    mainContainer: {
        alignItems: 'center',
        flex: 1,
        //justifyContent: 'center',
    },
});

export default HomeView;
