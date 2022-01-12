import React from 'react';
import {
  View,
  Image,
  FlatList,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import localStyles from '@home/HomeStyles';
import LeftIcon from '@icons/Premium.svg';
import SreachedIcon from '@icons/Search.svg';
import SingleScan from '@icons/Vecto(1).svg';
import BatchScan from '@icons/ScanBatch.svg';
import TextScan from '@icons/ScanOCR.svg';
import AddFolder from '@icons/AddFolder.svg';
import AddPro from '@icons/Mask.svg';

import LinearGradient from 'react-native-linear-gradient';
const ImageLinks = [
  {imagepath: '@icons/RecentScanCard.png'},
  {imagepath: '@icons/RecentScanCard.png'},
  {imagepath: '@icons/RecentScanCard.png'},
];
const Home = props => {
  const getWelComeMsg = () => {
    let myDate = new Date();
    let hrs = myDate.getHours();
    let greet;
    if (hrs < 12) greet = 'Good Morning';
    else if (hrs >= 12 && hrs <= 17) greet = 'Good Afternoon';
    else if (hrs >= 17 && hrs <= 24) greet = 'Good Evening';
    return <Text>{greet}</Text>;
  };
  const {flex1, flatView} = localStyles;
  return (
    <ScrollView>
      <View style={flex1}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={{color: '#000000', fontSize: 34}}>
              {getWelComeMsg()}
            </Text>
            <Text style={{color: '#9B9B9B', fontSize: 20}}>Welcome Back</Text>
          </View>
          <View style={{marginTop: 20}}>
            <LeftIcon width={60} height={60} />
          </View>
        </View>
        <LinearGradient
          colors={['#0563DB', '#0F8CFF', '#0252CA']}
          style={{borderRadius: 15, marginTop: 10}}>
          <View style={{position: 'absolute'}}>
            <AddPro style={{left: 294}} />
          </View>
          <View style={{padding: 20}}>
            <Text
              style={{
                color: '#FFF',
                fontSize: 18,
                fontWeight: '900',
                marginBottom: 5,
              }}>
              Unlock Premium
            </Text>
            <Text
              style={{
                color: '#FFF',
                fontSize: 16,
                fontWeight: '200',
              }}>{`Create Unlimited HD Scan & Picture to Text\n Scans without watermarks`}</Text>
          </View>
        </LinearGradient>
        <TouchableOpacity
          style={{
            borderRadius: 22,
            borderColor: '#fff',
            borderWidth: 1,
            marginTop: 30,
            backgroundColor: '#fff',
          }}>
          <View style={{flexDirection: 'row', padding: 15}}>
            <SreachedIcon />
            <Text style={{color: '#606060', marginHorizontal: 10}}>
              Search through your scans
            </Text>
          </View>
        </TouchableOpacity>
        <View style={{paddingTop: 20}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity style={{padding: 10}}>
              <SingleScan
                style={{alignSelf: 'center'}}
                width={40}
                height={40}
              />
              <Text style={{color: '#000', margin: 10}}>Single Scan</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{padding: 10}}>
              <BatchScan style={{alignSelf: 'center'}} width={40} height={40} />
              <Text style={{color: '#000', margin: 10}}>Batch Scan</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{padding: 10}}>
              <TextScan style={{alignSelf: 'center'}} width={40} height={40} />
              <Text style={{color: '#000', margin: 10}}>Scan to Scan</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{color: '#000000', fontSize: 34}}>Recent Scans</Text>
          <View>
            <FlatList
              keyExtractor={(item, index) => 'home' + index}
              data={ImageLinks}
              horizontal
              contentContainerStyle={flatView}
              renderItem={({item}) => (
                <View
                  style={{
                    height: 250,
                    width: 250,
                    margin: 5,
                    borderColor: '#707070',
                  }}>
                  <Image
                    resizeMode={'stretch'}
                    style={{height: 250, width: 250, borderRadius: 10}}
                    source={require('@icons/RecentScanCard.png')}
                  />
                </View>
              )}
            />
          </View>
        </View>
        <View
          style={{
            paddingTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#000000', fontSize: 34}}>Folders</Text>
          <TouchableOpacity>
            <AddFolder width={40} height={40} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
