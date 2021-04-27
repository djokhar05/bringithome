import React, { PureComponent } from 'react';
import { FlatList, Text, View, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import StoreLabel from './StoreLabel';
import { RouterLink, Spinner } from './common';
import { Actions } from 'react-native-router-flux';
import { getStores, sortStores, sortingFood } from '../redux/actions/storesAction';

class StoreList extends PureComponent {

    constructor(props){
        super(props);
        this.loadMoreStores = this.loadMoreStores.bind(this);
    }

    componentDidMount(){
        //console.log("I have mounted");
        this.props.getStores(
            false,
            this.props.page,
            this.props.limit
        );
    }

    loadMoreStores(){

      if(this.props.hasMoreToLoad){
        if(this.props.sorting == false && this.props.sortingFood == false){
          this.props.getStores(
            true,
            this.props.page,
            this.props.limit
          );
        } else if (this.props.sortingFood) {
          this.props.sortStores(
            true,
            this.props.page,
            this.props.sortParams,
            this.props.food
          );
        } else {
          this.props.sortStores(
            true,
            this.props.page,
            this.props.limit,
            {
                old: this.props.sortParams
            }
          );
        }
      }
    }



    renderFooter(){
        //console.log(`RENDER FOOTER: ${this.props.loading}`);
        return this.props.loading == true ?
            <Spinner /> : null
        // return <Spinner />
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

        //There's a bug with flatlist onEndReached Properties
        //it calls the onEndReached function on mount
        //so to avoid this bug, grab the device's height
        // and set the view style to flex: 1, height: height
        const { height } = Dimensions.get('window');
        const { stores } = this.props.stores;

        return(
            <View style={{flex: 1, height: height}}>
                {this.props.rootLoading ?
                    <Spinner /> :
                    <FlatList
                        style={{paddingBottom: 30}}
                        data={stores}
                        renderItem={this.renderItem}
                        keyExtractor={item=>item._id.toString()}
                        onEndReachedThreshold={.6}
                        onEndReached={this.loadMoreStores}
                        ListFooterComponent={this.renderFooter.bind(this)}
                    />
                }
                {
                  this.props.stores.stores.length < 1 ?
                  <Text
                    style={{
                      position: 'absolute',
                      top: '5%',
                      left: 20,
                      fontSize: 30,
                      fontWeight: 'bold',
                      color: 'gray'
                    }}>
                      No Stores Found Yet
                  </Text>:null
                }
            </View>
        )
    }
}

const mapStateToProps = state => {

    //console.log(state.stores);

    return {
        page: state.stores.page,
        stores: state.stores,
        loading: state.stores.loading,
        rootLoading: state.stores.rootLoading,
        sorting: state.stores.sorting,
        sortParams: state.stores.sortParams,
        hasMoreToLoad: state.stores.hasMoreToLoad,
        limit: state.stores.limit,
        food: state.stores.food,
        sortingFood: state.stores.sortingFood
    }
}

export default connect(
    mapStateToProps,
    {getStores, sortStores, sortingFood}
)(StoreList);
