import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import MySchedule from '../component/MySchedule'
import Header from '../component/Header'
import AvailabilityDetails from '../component/AvailabilityDetails'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <AvailabilityDetails />
      <MySchedule />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 12,
    paddingTop: 20
  }
})