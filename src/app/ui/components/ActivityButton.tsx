import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
// @ts-ignore
import { fontStyles } from '@ui/common-styles';

interface Props {
    color?: string;
    title?: string;
    onPress?(): void;
}

const ActivityButton = ({ onPress, title, color }: Props) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
            <Text style={[styles.title, fontStyles.bold, { color: color }]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        alignSelf: 'center',
        height: 50,
        justifyContent: 'center',
        margin: 30,
        width: 260,
    },
    title: {
        fontSize: 22,
    },
});

export default ActivityButton;
