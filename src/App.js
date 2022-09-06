import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { Store } from './store/Store';
import AuthProvider from './navigations/AuthProvider';
import RootStackNavigation from './navigations/RootStackNavigation';
import { enableScreens } from 'react-native-screens';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import Purchases from 'react-native-purchases';
import { API_KEY } from './constants';

enableScreens();

export default function App() {

    useEffect(()=>{
      Purchases.setDebugLogsEnabled(true);
      Purchases.setup(API_KEY);
    },[]);


  return (
    <Provider store={Store}>
        <AuthProvider>
          <SafeAreaView style={{flex: 1}}>
              <StatusBar />
              <RootStackNavigation />
          </SafeAreaView>
        </AuthProvider>
    </Provider>
  );
};
