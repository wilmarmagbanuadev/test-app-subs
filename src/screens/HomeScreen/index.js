import React, { useEffect,useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Purchases from 'react-native-purchases';

export default function HomeScreen ( { navigation} ) {

  // Get current available packages
  const getPackages = async () => {
    try {
      const offerings = await Purchases.getOfferings();
      console.log(offerings);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => { 
    getPackages();
  }, []);

    
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('PlanScreen')}>
            <Text style={{color:'#000'}}> Plan Plan </Text>
        </TouchableOpacity>
        <Text style={{color:'#000'}}> Home Screen </Text>
      </View>
    );
}
