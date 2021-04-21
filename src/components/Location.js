import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import { seekLocationPermission } from  '../helpers/getLocation';
import { connect } from 'react-redux';
import { locations } from '../data';
import { Picker } from '@react-native-picker/picker';
import { sortStores, processing } from '../redux/actions/storesAction';

class Location extends Component {
    state = {
        locationGetError: '',
        province: {
            state: '',
            index: 0
        },
        locale: {
            locals: [],
            area: ''
        },
        defaultArea: {
            default: 'Select an area',
            status: true
        }
    };


    componentDidMount(){
        //seekLocationPermission();
    }

    setProvince(state, index) {
        //You have to deduct 1 from the state index, because we added an extra
        // picker.item manually in the code

        index -= 1


        //We have to remove the "State word" from the incoming state
        //Before sending it to the server to sort
        //Because the states are saved in the database without
        //the "State" word.
        let selectedState = state; //keep the original state untouched

        let stateArr = state.split(" ");    //Split into array
        stateArr.splice(-1, 1);  //remove the state from the end of the word

        //join the words back adding a comma between them and remove
        //trailing white spaces
        state = stateArr.join(" ").trim();

        this.props.processing();
        this.props.sortStores(
            false,
            1,
            this.props.limit,
            {
                old: this.props.sortParams,
                new: { key: "state", value: state }
            }
        );

        //console.log("Sorting...");
        this.setState({
            province: {state: selectedState, index},
            locale: {
                locals: locations[index].states.locals,
                area: index !== 0 ? locations[index].states.locals[0].name : null
            },
            defaultArea: {
                ...this.state.defaultArea,
                status: true
            }
        });
    }

    setArea(area){
        this.props.processing();
        this.props.sortStores(
            false,
            1,
            this.props.limit,
            {
                old: this.props.sortParams,
                new: { key: "area", value: area }
            }
        );

        this.setState({
            ...this.state,
            locale: {
                ...this.state.locale,
                area
            },
            defaultArea: {
                ...this.state.defaultArea,
                status: false
            }
        })
    }

    render(){
        const { locale: {locals, area}, province } = this.state;
        const { address, suburb } = this.props;

        //console.log(area);

        return(
            <View style={{padding: 10}}>

                {/* <View>
                    <Text> Your Address is: {address} </Text>
                    <Text> Is your suburb {suburb} ? </Text>
                </View> */}

                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={province.state}
                        style={{ height: 44, width: '50%' }}
                        itemStyle={{height: 44}}
                        onValueChange={(itemValue, itemIndex) => this.setProvince(itemValue, itemIndex)}
                    >
                        <Picker.Item
                            key={'unselectable'}
                            label={'Select a State'}
                            value={'Select State'}
                        />
                        {
                            locations.map(item => (
                                <Picker.Item
                                    key={item.states.id}
                                    label={item.states.name}
                                    value={item.states.name}
                                />
                            ))
                        }
                    </Picker>

                    {
                        locals.length > 0 ?
                        <Picker
                            selectedValue={this.state.defaultArea.status == true ? this.state.defaultArea.default : area}
                            style={{ height: 44, width: 150 }}
                            itemStyle={{height: 44}}
                            onValueChange={itemValue => this.setArea(itemValue)}
                        >
                            <Picker.Item
                                key={'unselectable'}
                                label={'Select an area'}
                                value={'Select Area'}
                            />
                            {
                                locals.map(item => (
                                    <Picker.Item
                                        key={item.id}
                                        label={item.name}
                                        value={item.name}
                                    />
                                ))
                            }
                        </Picker>
                        : null
                    }
                </View>


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
    const { limit, sortParams } = state.stores;

    return {address, suburb, sortParams, limit};
}

export default connect(
    mapStateToProps,
    {sortStores, processing}
)(Location);
