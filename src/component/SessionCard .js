import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../global/colors';

const SessionCard = (props) => {
    const { date, title, subTitle, timing, isToday } = props.data;
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    return (
        <View style={styles.container}>
            <View style={styles.dateContainer}>
                <View style={isToday ? [styles.dateBox, { backgroundColor: colors.lightBlack }] : styles.dateBox}>
                    <Text style={isToday ? [styles.dateText, {color:colors.background}] : styles.dateText}>{day}</Text>
                    <Text style={isToday ? [styles.dateMonth, {color:colors.grey1}] : styles.dateMonth}>{month}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.infoHeader}>
                        <Text style={styles.nameText}>{title}</Text>
                        <Text style={styles.timeText}>{timing}</Text>
                    </View>
                    <Text style={styles.infoText}>{subTitle}</Text>
                </View>
            </View>
        </View>
    );
};

export default SessionCard;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.background,
        padding: 12,
        marginVertical: 10,
        borderRadius: 5
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateBox: {
        alignItems: 'center',
        paddingHorizontal: 14,
        paddingVertical: 7,
        borderRadius: 5,
        backgroundColor: colors.grey1,
    },
    dateText: {
        color: colors.lightBlack,
    },
    dateMonth: {
        color: colors.grey2,
        fontSize: 10,
    },
    infoContainer: {
        marginLeft: 10,
        flex: 1
    },
    infoHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    nameText: {
        color: colors.lightBlack,
        fontWeight: '600',
        fontSize: 16
    },
    timeText: {
        color: colors.grey2,
        fontSize: 12
    },
    infoText: {
        color: colors.grey2,
    },
});
