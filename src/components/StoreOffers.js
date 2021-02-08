import React, { Component } from 'react';
import { Text, View } from 'react-native';
import StoreLabel from './StoreLabel';


class StoreOffers extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { item } = this.props;

        return(
            <View>
                <StoreLabel
                    storename={item.company.name}
                    storeaddress={item.address}
                    storenumbers={item.phone}
                />
            </View>
        )
    }
};

export default StoreOffers