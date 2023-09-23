import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { colors } from '../global/colors';

const CustomPagination = ({ data, activeSlide, scrollTo }) => {
    return (
        <View style={styles.paginationContainer}>
            {data.map((_, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => scrollTo({ index, animated: true })}
                    style={[
                        styles.paginationDot,
                        activeSlide === index && styles.activePaginationDot,
                    ]}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:5
    },
    paginationDot: {
        width: 5,
        height: 5,
        borderRadius: 2.5,
        backgroundColor: colors.grey2,
        marginHorizontal: 4,
    },
    activePaginationDot: {
        backgroundColor: colors.lightGreen,
    },
});

export default CustomPagination;
