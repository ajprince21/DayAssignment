import { StyleSheet, Text, View, Image, Switch } from 'react-native';
import React, { useState } from 'react';
import { colors } from '../global/colors';

const AvailabilityDetails = () => {
    const [isAvailable, setAvailable] = useState(true);

    const toggleSwitch = () => setAvailable((previousState) => !previousState);

    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <View style={styles.imageContainer}>
                    <Image
                        // source={{ uri: 'https://picsum.photos/seed/picsum/50/50' }}
                        source={require('../images/profileDemo.jpg')}
                        style={styles.image}
                    />
                    <View
                        style={isAvailable ? styles.badge : [styles.badge, styles.redBadge]}
                    />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{isAvailable ? "I'm online" : "I'm offline"}</Text>
                    <Text style={styles.subtitle}>
                        {isAvailable ? 'Awaiting requests...' : 'Not available !!'}
                    </Text>
                </View>
            </View>
            <View>
                <Switch
                    trackColor={{ false: '#767577', true: colors.lightGreen }}
                    thumbColor={isAvailable ? colors.background : '#f4f3f4'}
                    onValueChange={toggleSwitch}
                    value={isAvailable}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.cardBackground,
        width: '100%',
        borderRadius: 5,
        marginVertical: 10,
        padding: 12,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        position: 'relative',
    },
    image: {
        height: 50,
        width: 50,
        resizeMode: 'cover',
        borderRadius: 5,
    },
    badge: {
        position: 'absolute',
        backgroundColor: 'green',
        width: 15,
        height: 15,
        borderRadius: 7.5,
        top: -2,
        right: -2,
        borderColor: colors.background,
        borderWidth: 3,
    },
    redBadge: {
        backgroundColor: colors.lightRed,
    },
    textContainer: {
        marginLeft: 10,
        alignItems: 'flex-start',
    },
    title: {
        color: colors.lightBlack,
        fontSize: 16,
        fontWeight: '600',
    },
    subtitle: {
        fontSize: 14,
        fontWeight: '500',
        color:colors.grey2
    },
});

export default AvailabilityDetails;
