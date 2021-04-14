import React, { Component } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';
import Location from './Location';
import StoreList from './StoreList';

class Home extends Component {
    state = {
        foodSearch: ''
    };

    constructor(props){
        super(props);
        this.updateSearch = this.updateSearch.bind(this);
    }

    updateSearch(foodSearch){
        this.setState({ foodSearch })
    }

    searchNow(foodSearch){
        console.log(foodSearch)
    }

    render(){
        const { foodSearch } = this.state;

        return(
            <View style={{flex: 1}}>
                <Location />

                <SearchBar
                    placeholder="Search for food ..."
                    onChangeText={this.updateSearch}
                    value={foodSearch}
                />

                <StoreList />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    pickerContainer:{
        flexDirection: 'row'
    }
})

const mapStateToProps = state => {
    const { address, suburb } = state.location.place;
    return{address, suburb};
}

export default connect(mapStateToProps)(Home);
