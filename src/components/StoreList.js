import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import StoreLabel from './StoreLabel';
import { RouterLink } from './common';
import { Actions } from 'react-native-router-flux';
import { getStores } from '../redux/actions/storesAction';

class StoreList extends Component {

    componentDidMount(){
        this.props.getStores();
    }
    
    renderItem({ item }){
        return (

            <RouterLink onPress={() => Actions.StoreOffers({item})}>   
                <StoreLabel
                    storename={item.name}
                    storeaddress={item.address}
                    storenumbers={item.phone}
                    storeoffers={item.offers}
                />
            </RouterLink>
        )
    }
    
    render(){
        const { stores } = this.props.stores;
        
        return(
             <FlatList
                data={stores}
                renderItem={this.renderItem}
                keyExtractor={item=>item._id.toString()}
            />
        )
    }
}

const mapStateToProps = state => {
    return {stores: state.stores}
}

export default connect(mapStateToProps, {getStores})(StoreList);