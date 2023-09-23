import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SessionCard from './SessionCard '
import { colors } from '../global/colors'
import Icon from 'react-native-vector-icons/Ionicons';

const MySchedule = () => {
    const [showSechedule, setShowSechedule] = useState(false)
    return (
        <View style={styles.container}>
            <Pressable style={styles.header} onPress={() => setShowSechedule(!showSechedule)}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="reader" color={colors.lightGreen} size={24} />
                    <Text style={styles.headingText}>My Schedule</Text>
                </View>
                <Icon name="chevron-down" color={colors.lightGreen} size={16} />
            </Pressable>
            {showSechedule &&
                <View style={{padding:12}}>
                    <SessionCard />
                </View>

            }

        </View>
    )
}

export default MySchedule

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.cardBackground,
        width: '100%',
        borderRadius: 5,
        marginVertical:10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12
    },
    headingText: {
        fontSize: 14,
        color: colors.lightBlack,
        fontWeight: '500',
        paddingLeft: 10
    }
})