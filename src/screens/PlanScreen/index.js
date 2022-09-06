import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function PlanScreen ( { navigation } ) {

    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#000'}}> Choose Plan </Text>

        <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
            <Text style={{color:'#000'}}> Home Page </Text>
        </TouchableOpacity>
        
      </View>
    );
}
