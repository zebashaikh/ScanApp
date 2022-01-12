import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, TouchableOpacity, Text} from 'react-native';
import Walkthrough from '@walkthrough/Walkthrough.js';
import Home from '@home/Home';
import Setting from '@settingScreen/SettingScreen';
import Scan from '@scan/Scan';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeIcon from '@icons/Library.svg';
import PlusIcon from '@icons/Scan.svg';
import SettingIcon from '@icons/Vector.svg';

const Tab = createBottomTabNavigator();
const AppStack = createStackNavigator();

const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const icons = (name, isFocused) => {
          if (name == 'Home') {
            return <HomeIcon stoke={isFocused ? '#21AAE4' : '#828282'} />;
          } else if (name == 'Scan') {
            return <PlusIcon stoke={isFocused ? '#21AAE4' : '#828282'} />;
          } else if (name == 'Setting') {
            return <SettingIcon stoke={isFocused ? '#21AAE4' : '#828282'} />;
          }
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        {
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopColor: '#21AAE4',
                borderTopWidth: isFocused ? 1 : 0,
              }}>
              <View
                style={{
                  paddingVertical: 5,
                  alignItems: 'center',
                }}>
                {icons(route.name, isFocused)}
              </View>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
};
const MyTabs = () => {
  return (
    <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        name={'Home'}
        options={{headerShown: false}}
        component={Home}
      />
      <Tab.Screen
        name={'Scan'}
        options={{headerShown: false}}
        component={Scan}
      />
      <Tab.Screen
        name={'Setting'}
        options={{headerShown: false}}
        component={Setting}
      />
    </Tab.Navigator>
  );
};
function Navigator() {
  const Appnavigator = () => {
    return (
      <AppStack.Navigator>
        <AppStack.Screen
          options={{headerShown: false}}
          name={'Walkthrough'}
          component={Walkthrough}
        />
        <AppStack.Screen
          options={{headerShown: false}}
          name={'Home'}
          component={MyTabs}
        />
      </AppStack.Navigator>
    );
  };

  return (
    <>
      <NavigationContainer>
        <Appnavigator />
      </NavigationContainer>
    </>
  );
}
export default Navigator;
