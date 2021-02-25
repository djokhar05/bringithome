import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import StoreLabel from './StoreLabel';
import { RouterLink } from './common';
import { Actions } from 'react-native-router-flux';
import { getStores } from '../redux/actions/storesAction';

class StoreList extends Component {

    state = { 
        foodSearch: '',
        limit: 6,
        loading: true,
        loadExtraData: false
    };

    constructor(props){
        super(props);
        this.loadMoreStores = this.loadMoreStores.bind(this);
    }

    componentDidMount(){
        this.props.getStores(
            false,
            this.props.page, 
            this.state.limit
        );
    }

    loadMoreStores(){
        this.props.getStores(
            true,
            this.props.page,
            this.state.limit
        );
    }
    
    renderItem({ item }){
        return (

            <RouterLink onPress={() => Actions.StoreOffers({item})}>   
                <StoreLabel
                    storename={item.name}
                    storeaddress={item.address}
                    storenumbers={item.phone}
                    storeoffers={item.offers}
                    storeimage={item.image}
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
                onEndReachedThreshold={0}
                onEndReached={this.loadMoreStores}
            />
        )
    }
}

const mapStateToProps = state => {
    //console.log(state.stores.page);
    return {
        page: state.stores.page,
        stores: state.stores
    }
}

export default connect(mapStateToProps, {getStores})(StoreList);