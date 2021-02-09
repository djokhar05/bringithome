import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import StoreLabel from './StoreLabel';
import { stores } from '../data';
import { RouterLink } from './common';
import { Actions } from 'react-native-router-flux';

class StoreList extends Component {
    
    renderItem({ item }){
        return (

            <RouterLink onPress={() => Actions.StoreOffers({item})}>   
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
                keyExtractor={item=>item.id.toString()}
            />
        )
    }
}


export default StoreList;