import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { GLOBAL_COLORS } from '@ui/const';
import { progressUtil } from '@shared/utils';

interface Props {
    current?: number;
    max?: number;
}

const ProgressBar = ({ current, max }: Props) => {
    return (
        <View style={styles.mainContainer}>
            <View style={[styles.progressBar, { width: `${progressUtil(current, max, true)}%` }]} />
            <Text style={styles.value}>{progressUtil(current, max)} %</Text>
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
