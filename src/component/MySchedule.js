import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SessionCard from './SessionCard '
import { colors } from '../global/colors'
import Icon from 'react-native-vector-icons/Ionicons';
import sessionData from '../global/sessionData';

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
                <View style={{ padding: 12 }}>
                    <Text style={{ color: colors.lightGreen }}>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</Text>
                    <>
                        {sessionData.map((item, index) => {
                            return (
                                <SessionCard data={item} key={index} />
                            )
                        })}
                    </>
                    <Pressable style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ fontSize: 16, color: colors.lightGreen }}>View More </Text>
                        <Icon name="chevron-down" color={colors.lightGreen} size={14} />
                    </Pressable>

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
        marginVertical: 10
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