import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../global/colors';

const Header = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name="menu" size={25} color={colors.lightGreen} />
                <Text style={styles.title}>TIPS</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.editButton}>
                <Text style={styles.editButtonText}>Edit Availability</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        color: colors.lightBlack,
        marginLeft: 5,
    },
    editButton: {
        borderColor: colors.lightGreen,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 3,
        borderWidth: 0.8
    },
    editButtonText: {
        color: colors.lightGreen,
        fontWeight: '400',
    },
});

export default Header;
