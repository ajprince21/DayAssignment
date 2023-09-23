import React, { useState, useRef } from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import CarouselCard from './CarouselCard';
import Carousel from 'react-native-reanimated-carousel';
import randomDataList from '../global/crouselData';
import CustomPagination from './CustomPagination';

const CarouselSlide = () => {
  const width = Dimensions.get('window').width;
  const carouselRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleScrollTo = ({ index, animated }) => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ index, animated });
    }
  };

  const handleSnapToItem = (index) => {
    setActiveSlide(index);
  };

  return (
    <View style={{ alignItems: 'center' }}>
      <Carousel
        loop={true}
        width={width}
        height={150}
        autoPlay={true}
        parallaxScrollingScale={1}
        pagingEnabled={true}
        snapEnabled={true}
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
        onSnapToItem={handleSnapToItem}
        ref={carouselRef}
      />
      <CustomPagination
        data={randomDataList}
        activeSlide={activeSlide}
        scrollTo={handleScrollTo}
      />
    </View>
  );
};

export default CarouselSlide;

const styles = StyleSheet.create({});
