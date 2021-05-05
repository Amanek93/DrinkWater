import AntDesign from 'react-native-vector-icons/AntDesign';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { DEVICE_HEIGHT } from '../common-styles';

interface Props {
    labelValue?: string;
    placeholderText?: string;
    iconType?: string;
}

const FormInput = ({ labelValue, placeholderText, iconType, ...rest }: Props) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
                <AntDesign color="#666" name={iconType} size={25} />
            </View>
            <TextInput
                numberOfLines={1}
                placeholder={placeholderText}
                placeholderTextColor="#666"
                style={styles.input}
                value={labelValue}
                {...rest}
            />
        </View>
    );
};

export default FormInput;

const styles = StyleSheet.create({
    iconStyle: {
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        height: '100%',
        justifyContent: 'center',
        padding: 10,
        width: 50,
    },
    input: {
        alignItems: 'center',
        color: '#333',
        flex: 1,
        fontSize: 16,
        justifyContent: 'center',
        padding: 10,
    },
    inputContainer: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        height: DEVICE_HEIGHT / 15,
        marginBottom: 10,
        marginTop: 5,
        width: '100%',
    },
});
