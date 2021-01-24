import { Dimensions, StyleSheet } from 'react-native';
// @ts-ignore
import { GLOBAL_COLORS } from '@ui/const';

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const fontStyles = StyleSheet.create({
    align: {
        textAlign: 'center',
    },
    bold: {
        fontWeight: 'bold',
    },
    highlighted: {
        color: GLOBAL_COLORS.dodgerBlue,
        fontWeight: 'bold',
    },
    regular: {
        fontSize: 16,
        fontWeight: '300',
    },
});

export const commonStyles = StyleSheet.create({
    padding: {
        paddingLeft: 25,
        paddingRight: 25,
    },
    space_2em: {
        marginBottom: 40,
    },
    space_3em: {
        marginBottom: 28,
    },
});
