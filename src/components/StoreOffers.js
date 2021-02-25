import React, { Component } from 'react';
import { Text, View } from 'react-native';
import StoreLabel from './StoreLabel';

import Local from './Local';
import Snack from './Snack';
import Continental from './Continental';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
                    tabBarOptions={{
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray'
                    }}
                >
                    <Tab.Screen
                        name="Local"
                        children={() => <Local local={item.offers.local} />}
                    />

                    <Tab.Screen
                        name="Snack"
                        children={() => <Snack snack={item.offers.snack} />}
                    />
                    
                    <Tab.Screen
                        name="Continental"
                        children={() => <Continental continental={item.offers.continental} />}
                    />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
};

export default StoreOffers