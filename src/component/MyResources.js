import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../global/colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MyResources = () => {
    const [showResources, setResources] = useState(false)
    return (
        <View style={styles.container}>
            <Pressable style={styles.header} onPress={() => setResources(!showResources)}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="book-open-blank-variant" color={colors.lightGreen} size={24} />
                    <Text style={styles.headingText}>My Resources</Text>
                </View>
                <Icon name="chevron-down" color={colors.lightGreen} size={16} />
            </Pressable>

        </View>
    )
}

export default MyResources

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