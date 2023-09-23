import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { colors } from '../global/colors';

const CarouselCard = (props) => {
    return (
        <View style={styles.cardContainer}>
            <ImageBackground
                source={require('../images/cardBackground.jpg')}
                style={styles.imageBackground}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.newText}>{props.cardTitle}</Text>
                    <Text style={styles.mainText}>{props.mainText}</Text>
                    <Text style={styles.moreText}>
                        {props.subText}{' '}
                        {props.hasMoreText && (
                            <Text>
                                <Text style={styles.moreText}>...</Text>
                                <Text style={styles.moreLink}> more</Text>
                            </Text>
                        )}
                    </Text>
                </View>
                <View style={{ flex: 1 }}>

                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: '100%',
        aspectRatio: 2.8,
        borderRadius: 5,
        overflow: 'hidden',
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        flexDirection: 'row',
        alignItems: 'center'
    },
    textContainer: {
        padding: 10,
        alignItems: 'flex-start',
        flex: 3
    },
    newText: {
        color: colors.lightRed,
        fontSize: 14,
        fontWeight: 'bold',
    },
    mainText: {
        color: colors.lightBlack,
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
    },
    moreText: {
        color: colors.grey2,
        fontSize: 14,
    },
    moreLink: {
        color: colors.lightGreen,
    },
});

export default CarouselCard;
