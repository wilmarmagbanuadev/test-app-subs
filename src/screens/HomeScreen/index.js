import React, { useEffect,useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function HomeScreen ( { navigation} ) {
    
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity onPress={()=>navigation.navigate('PlanScreen')}>
            <Text style={{color:'#000'}}> Plan Plan </Text>
        </TouchableOpacity>
        <Text style={{color:'#000'}}> Home Screen </Text>
      </View>
    );
}
