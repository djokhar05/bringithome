import React, { Component } from 'react';
import { Text, View } from 'react-native';
import StoreLabel from './StoreLabel';

import Local from './Local';
import Snack from './Snack';
import Continental from './Continental';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class StoreOffers extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { item } = this.props;
        const Tab = createBottomTabNavigator();
        
        return(
            <NavigationContainer>
                <StoreLabel
                    storename={item.name}
                    storeaddress={item.address}
                    storenumbers={item.phone}
                    storeimage={item.image}
                />

                <Tab.Navigator

                    screenOptions={({ route }) => ({
                      tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Local') {
                          iconName = focused ? 'rice' : 'rice';
                        } else if (route.name === 'Snack') {
                          iconName = focused ? 'food' : 'food-off';
                        } else if (route.name === 'Continental') {
                            iconName = focused ? 'food-steak' : 'food-steak-off';
                        }

                        // You can return any component that you like here!
                        return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                      },
                    })}

                    tabBarOptions={{
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray',
                        labelStyle: {
                            fontSize: 15
                        }
                    }}
                >
                    <Tab.Screen
                        name="Local"
                        children={() => <Local local={item.offers.local} />}
                        options={{ tabBarBadge: item.offers.local.length }}
                    />

                    <Tab.Screen
                        name="Snack"
                        children={() => <Snack snack={item.offers.snack} />}
                        options={{ tabBarBadge: item.offers.snack.length }}
                    />
                    
                    <Tab.Screen
                        name="Continental"
                        children={() => <Continental continental={item.offers.continental} />}
                        options={{ tabBarBadge: item.offers.continental.length }}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
};

export default StoreOffers