import * as React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

import { globalColors } from '../const';
import { progressUtil } from '../../shared/utils/progress-util';
import {useEffect, useState} from 'react';

interface Props {
    current: number;
    max: number;
}

const AnimatedProgressBar = ({ current, max }: Props) => {
    const [width, setWidth] = useState<number>(0);
    const animatedValue = React.useRef(new Animated.Value(-1000)).current;
    const reactive = React.useRef(new Animated.Value(-1000)).current;

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: reactive,
            useNativeDriver: true,
            duration: 300,
        }).start();
    }, []);

    useEffect(() => {
reactive.setValue(-width + width * progressUtil(current, max))
    }, [current, width]);

    return (
        <View onLayout={e => {
            const newWidth = e.nativeEvent.layout.width; setWidth(newWidth)}} style={styles.mainContainer}>
            {/*<Animated.View style={[styles.progressBar, { width: `${progressUtil(current, max, true)}%` }]} />*/}
            <Animated.View style={[styles.progressBar, {transform: [{translateX: animatedValue}]}]} />
            <Text style={styles.value}>{progressUtil(current, max, true)} %</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        borderColor: globalColors.silverChalice,
        borderWidth: 1,
        height: 40,
        width: '100%',
        overflow: 'hidden',
        borderRadius: 20,
    },
    progressBar: {
        borderRadius: 20,
        backgroundColor: globalColors.dodgerBlue,
        height: '100%',
    },
    value: {
        alignSelf: 'center',
        position: 'absolute',
        textAlign: 'center',
        top: 10,
    },
});
export default AnimatedProgressBar;
