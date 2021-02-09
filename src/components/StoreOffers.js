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
                    storename={item.company.name}
                    storeaddress={item.address}
                    storenumbers={item.phone}
                />

                <Tab.Navigator
                    tabBarOptions={{
                        activeTintColor: 'tomato',
                        inactiveTintColor: 'gray'
                    }}
                >
                    <Tab.Screen name="Local" component={Local} />
                    <Tab.Screen name="Snack" component={Snack} />
                    <Tab.Screen name="Continental" component={Continental} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
};

export default StoreOffers