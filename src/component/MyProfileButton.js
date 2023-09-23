import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyProfileButton = () => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.header}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="account" color={colors.lightGreen} size={24} />
                    <Text style={styles.headingText}>My Profile</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default MyProfileButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.cardBackground,
        width: '100%',
        borderRadius: 5,
        marginVertical: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12
    },
    headingText: {
        fontSize: 14,
        color: colors.lightBlack,
        fontWeight: '500',
        paddingLeft: 10
    }
})