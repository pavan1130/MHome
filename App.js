import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/Screen/HomeScreen';
import FilterScreen from './src/Screen/FilterScreen';
import Education_Academics from './src/Screen/CategorieScreens/Education_Academics';
import FinanceInvesting from './src/Screen/CategorieScreens/FinanceInvesting';
import Health_Wellness from './src/Screen/CategorieScreens/Health_Wellness';
import Arts_Design from './src/Screen/CategorieScreens/Arts_Design';
import Technology_Coding from './src/Screen/CategorieScreens/Technology_Coding';
import LeadershipManagement from './src/Screen/CategorieScreens/LeadershipManagement';
import Entrepreneurship from './src/Screen/CategorieScreens/Entrepreneurship';
import PersonalDevelopment from './src/Screen/CategorieScreens/PersonalDevelopment';
import SeeMore from './src/Screen/SeeMore';
import MeetingHistory from './src/Screen/MeetingHistory';
import NotificationScreen from './src/Screen/NotificationScreen';
import PaymentScreen from './src/Screen/PaymentScreen';
import AppSetting from './src/Screen/AppSetting';
import AppSettingScreen from './src/Screen/AppSettingScreen';
import ChatScreen from './src/Screen/ChatScreen';
import AboutusScreen from './src/Screen/AboutusScreen';
import Help_Support from './src/Screen/Help_Support';
import NoNetworkScreen from './src/Screen/NoNetworkScreen';
import ChatScreenFirst from './src/Screen/ChatScreenFirst';
import Demo from './src/Screen/Demo';
import PinnedMsgScreen from './src/Screen/PinnedMsgScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homescreen">
        <Stack.Screen
          name="Homescreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Seemore"
          component={SeeMore}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FilterScreen"
          component={FilterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FI"
          component={FinanceInvesting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Ed"
          component={Education_Academics}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HW"
          component={Health_Wellness}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Arts"
          component={Arts_Design}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TC"
          component={Technology_Coding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LM"
          component={LeadershipManagement}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="E"
          component={Entrepreneurship}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PD"
          component={PersonalDevelopment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="notification"
          component={NotificationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MettingHistroy"
          component={MeetingHistory}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="appsetting"
          component={AppSetting}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="appsettingScreen"
          component={AppSettingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="About"
          component={AboutusScreen} //// About screnn in menubar section
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HelpSupport"
          component={Help_Support}
          options={{headerShown: false}} //// Help&support screnn in menubar section
        />
        <Stack.Screen
          name="FirstChatScreen"
          component={ChatScreenFirst}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Pinnedmsg"
          component={PinnedMsgScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <NoNetworkScreen /> // NoINternetScreen
    // <MeetingHistory />
    // <NotificationScreen />
    // <ChatScreen />
    // <Help_Support />
    // <Demo />
  );
};

const styles = StyleSheet.create({});

export default App;
