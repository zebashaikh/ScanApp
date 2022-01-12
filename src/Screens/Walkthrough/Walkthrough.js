import React, {useState, useRef} from 'react';
import {
  View,
  Image,
  Dimensions,
  Animated,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import localStyles from '@walkthrough/WalkthroughStyles';
import {ONBOARDING_DATA} from '@resources/Constants';
import NextIcon from '@icons/Next.svg';
const {width, height} = Dimensions.get('window');

const Walkthrough = props => {
  const [activeSlide, setActiveSlide] = useState(0);
  let corouselref = useRef();
  const renderItems = ({item}) => {
    const {imgContainer} = localStyles;

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={imgContainer}>{item?.IMAGE}</View>
        <Text
          style={{
            color: '#000000',
            textAlign: 'center',
            fontSize: 18,
            marginBottom: 20,
          }}>
          {item.TITLE}
        </Text>
        <Text
          style={{
            color: '#000000',
            textAlign: 'center',
            paddingHorizontal: 5,
            fontSize: 18,
          }}>
          {item.TEXT}
        </Text>
      </View>
    );
  };
  const {flatView} = localStyles;
  return (
    <View>
      <Carousel
        containerCustomStyle={{
          flexGrow: 1,
          height: '100%',
        }}
        onSnapToItem={index => setActiveSlide(index)}
        ref={c => {
          corouselref = c;
        }}
        data={ONBOARDING_DATA}
        renderItem={data => renderItems(data)}
        sliderWidth={width * 0.95}
        itemHeight={height * 0.1}
        itemWidth={width * 0.95}
      />
      <View style={{top: -60}}>
        <FlatList
          keyExtractor={(item, index) => 'onboarding_' + index}
          data={ONBOARDING_DATA}
          horizontal
          contentContainerStyle={flatView}
          renderItem={({index}) => (
            <View
              style={
                index === activeSlide
                  ? {
                      width: 10,
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: '#49A6FC',
                      marginHorizontal: 8,
                    }
                  : {
                      width: 6,
                      height: 6,
                      borderRadius: 5,
                      backgroundColor: '#9B9B9B',
                      marginHorizontal: 8,
                    }
              }></View>
          )}
        />
        {activeSlide === 3 && (
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Home')}
            style={{alignItems: 'flex-end', top: -50, marginHorizontal: 10}}>
            <NextIcon />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Walkthrough;
