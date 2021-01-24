import * as React from 'react';
import { GLOBAL_COLORS } from '@ui/const';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    current?: number;
}

const ProgressBar = ({ current }: Props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={[styles.progressBar, { width: `30%` }]} />
            <Text style={styles.value}>{current}%</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        borderColor: GLOBAL_COLORS.silverChalice,
        borderWidth: 1,
        height: 60,
        width: '100%',
    },
    progressBar: {
        backgroundColor: GLOBAL_COLORS.dodgerBlue,
        height: '100%',
    },
    value: {
        alignSelf: 'center',
        position: 'absolute',
        textAlign: 'center',
        top: 20,
    },
});
export default ProgressBar;
