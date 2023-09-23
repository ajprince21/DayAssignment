import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import CarouselCard from './CarouselCard';
import Carousel from 'react-native-reanimated-carousel';
import randomDataList from '../global/crouselData';

const CarouselSlide = () => {
  const width = Dimensions.get('window').width;
  return (
    <View style={{ alignItems: 'center', }}>
      <Carousel
        loop={true}
        width={width*0.95}
        height={150}
        style={{
          padding:10
        }}
        autoPlay={true}
        mode='parallax'
        parallaxScrollingScale={1}
        scrollAnimationDuration={1000}
        data={randomDataList}
        renderItem={({ item, index }) => (
          <CarouselCard
            cardTitle={item.cardTitle}
            mainText={item.mainText}
            subText={item.subText}
            hasMoreText={item.hasMoreText}
          />
        )}
      />
    </View>
  );
}

export default CarouselSlide;

const styles = StyleSheet.create({});
