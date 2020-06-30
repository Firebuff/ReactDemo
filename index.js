/**
 * @format
 */

import React from 'react'
import { Provider } from 'react-redux'

import Store from './redux/store'

import { NavigationContainer } from '@react-navigation/native';


import {AppRegistry} from 'react-native';

import App from './containers/navi-tab';

// import App from './App';
import {name as appName} from './app.json';


function FinalApp () {
    return (
        <Provider store={Store}>
            <NavigationContainer>
                <App></App>
            </NavigationContainer>
        </Provider>
      
    )
}



// AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerComponent(appName, () => FinalApp);
