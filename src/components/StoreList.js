import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import StoreLabel from './StoreLabel';
import { RouterLink, Spinner } from './common';
import { Actions } from 'react-native-router-flux';
import { getStores, processing } from '../redux/actions/storesAction';

class StoreList extends Component {

    state = { 
        foodSearch: '',
        limit: 6,
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
        //this.props.processing();
        this.props.getStores(
            true,
            this.props.page,
            this.state.limit
        );
    }

    renderFooter(){
        //console.log(`RENDER FOOTER: ${this.props.loading}`);
        return this.props.loading == true ? 
            <Spinner /> : null
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
                ListFooterComponent={this.renderFooter.bind(this)}
            />
        )
    }
}

const mapStateToProps = state => {
    //console.log(`Loading is ${state.stores.loading}`);
    return {
        page: state.stores.page,
        stores: state.stores,
        loading: state.stores.loading
    }
}

export default connect(
    mapStateToProps,
    {getStores, processing}
)(StoreList);