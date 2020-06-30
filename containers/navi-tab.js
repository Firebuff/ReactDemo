import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import k from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

// redux

import { connect } from 'react-redux'

import { plusTotal, minusTotal } from '../redux/actions'

import { getFocusedRouteNameFromRoute } from '@react-navigation/native';


import { TransitionPresets } from '@react-navigation/stack';

function getHeaderTitle(route) {
  
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Feed';

  switch (routeName) {
    case 'Feed':
      return 'News feed';
    case 'Profile':
      return 'My profile';
    case 'Account':
      return 'My account';
    case 'AcountDetail':
      return 'haha';
  }
}




const FeedScreen = function (props) {
  console.log(props)
  const navigation = props.navigation
  let {minusTotal, plusTotal} = props
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <View style={ {marginTop: 10, fontSize: 20, flexDirection: 'row'} }>

        <Button title="加" onPress={ () => {plusTotal(5)}}></Button>

        <Text style={ {marginTop: 10, fontSize: 20, alignItems:'center',lineHeight: 20, marginLeft: 10, marginRight: 10} }
        >{props.product.total}</Text>

        <Button title="减" onPress = { () => {minusTotal(6)}} ></Button>

      </View>
    </View>
  );
}


const FeedScreenConnect = connect(state => ({...state}),{minusTotal,plusTotal})(FeedScreen)

function ProfileScreen() {
  return <View />;
}

function AccountScreen({navigation}) {
  return (
   <View style={ {flex: 1, alignItems: 'center', justifyContent: 'center'} }>
     <View >
       <Button
         onPress = { () => {
           navigation.navigate('AccountDetail')
         }}
         title='去详情页'
       />
     </View>
   </View>
  )
}


function AccountDetailScreen() {
  return (
    <View style={ {flex: 1, alignItems: 'center', justifyContent: 'center'} }>
      <Text>Acount detail</Text>
    </View>
  )
}

function SettingsScreen() {
  return <View />;
}

const Tab = createBottomTabNavigator();

function HomeTabs() {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={FeedScreenConnect} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    
      <Stack.Navigator
        screenOptions = {{
          ...TransitionPresets.SlideFromRightIOS
        }}
      >
        <Stack.Screen name="Home" component={HomeTabs} 
          options={({ route }) => ({
             headerTitle: getHeaderTitle(route),
           })}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="AccountDetail" component={AccountDetailScreen} />
      </Stack.Navigator>
   
  );
}

