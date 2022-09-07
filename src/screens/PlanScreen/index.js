import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FlashList } from "@shopify/flash-list";
import Purchases from 'react-native-purchases';

export default function PlanScreen ( { navigation } ) {
  const [products,setProducts] = useState(null);
  // Get current available packages
    const getPackages = async () => {
      try {
        const offerings = await Purchases.getOfferings();
        if(offerings.current != null){
          setProducts(offerings.current)
          console.log(offerings.current)
        }
      } catch (e) {
        console.log(e);
      }
    };

    useEffect(() => { 
      getPackages();
    }, []);

    const buyPackage = async packages => {
      
      try {
        const purchaseMade = await Purchases.purchasePackage(packages);
        if (typeof purchaseMade
        .purchaserInfo
        .entitlements
        .active
        .my_entitlement_identifier !== "undefined") {
        // Unlock that great "pro" content
        }
        } catch (e) {
        if (!e.userCancelled) {
        //showError(e);
        console.log(e)
        }
      }
    }
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{color:'#000'}}> Choose Plan </Text>
            <View style={{flexDirection:'row',justifyContent:'center',marginVertical:25,width:'100%'}}>
                  {
                  !products ? (
                    <ActivityIndicator/>
                  ):(
 
                    products.availablePackages.map(packages =>(
                      <TouchableOpacity key={packages.identifier} style={{backgroundColor:'blue',marginHorizontal:5,paddingVertical:5,paddingHorizontal:25}} onPress={()=> buyPackage(packages)}>
                          <Text style={{color:'#fff'}} >Apply</Text>
                          <Text style={{color:'#fff'}} >{packages.packageType}</Text>
                          <Text style={{color:'#fff'}} >{packages.product.price_string}</Text>
                      </TouchableOpacity>                      
                    ))
                    
                  )
                }
            </View>
        <TouchableOpacity onPress={()=>navigation.navigate('HomeScreen')}>
            <Text style={{color:'#000'}}> Home Page </Text>
        </TouchableOpacity>
        
      </View>
    );
}
