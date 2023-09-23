import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../global/colors'
import MySchedule from '../component/MySchedule'
import Header from '../component/Header'
import AvailabilityDetails from '../component/AvailabilityDetails'
import MyProfileButton from '../component/MyProfileButton'
import CarouselSlide from '../component/CarouselSlide'
import MyResources from '../component/MyResources'


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.background} barStyle="light-content" />
      <Header />
      <ScrollView>
        <CarouselSlide />
        <AvailabilityDetails />
        <MySchedule />
        <MyResources />
        <MyProfileButton />
      </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 12,
    paddingTop: 10
  }
})