import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import StoreLabel from './StoreLabel';
import { stores } from '../data';
import { RouterLink } from './common';
import { Actions } from 'react-native-router-flux';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

class StoreList extends Component {
    
    renderItem({ item }){
        return (

            <RouterLink onPress={() => Actions.push("StoreOffers",{item})}>   
                <StoreLabel
                    storename={item.company.name}
                    storeaddress={item.address}
                    storenumbers={item.phone}
                />
            </RouterLink>
        )
    }
    
    render(){
        
        return(
            <FlatList
                data={stores}
                renderItem={this.renderItem}
                keyExtractor={item=>item.id}
            />
        )
    }
}


export default StoreList;