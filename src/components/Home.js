import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { connect } from 'react-redux';
import Location from './Location';
import { Actions } from 'react-native-router-flux';
import StoreLabel from './StoreLabel';
import { RouterLink } from './common';


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
    
    render(){
        const { foodSearch } = this.state;

        return(
            <View>
                <SearchBar
                    placeholder="Search for food ..."
                    onChangeText={this.updateSearch}
                    value={foodSearch}
                    lightTheme
                    round
                    searchIcon
                />

                <Location />

                <RouterLink onPress={() => Actions.push("StoreOffers",{})}>
                    <StoreLabel />
                </RouterLink>

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