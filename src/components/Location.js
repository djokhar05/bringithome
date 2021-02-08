import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { seekLocationPermission } from  '../helpers/getLocation';
import { connect } from 'react-redux';
import { locations } from '../data';
import { Picker } from '@react-native-picker/picker';

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
        }
    };

    componentDidMount(){
        seekLocationPermission();
    }

    setProvince(state, index) {
        this.setState({
            province: {state, index},
            locale: {
                locals: locations[index].states.locals,
                area: index !== 0 ? locations[index].states.locals[0].name : null
            }
        });
    }

    setArea(area){
        this.setState({
            ...this.state,
            locale: {
                ...this.state.locale,
                area
            }
        })
    }
    
    render(){
        const { locale: {locals, area}, province } = this.state;
        const { address, suburb } = this.props;

        console.log(area);

        return(
            <View style={{padding: 10}}>

                <View>
                    <Text> Your Address is: {address} </Text>
                    <Text> Is your suburb {suburb} ? </Text>
                </View>

                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={province.state}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => this.setProvince(itemValue, itemIndex)}
                    >
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
                            selectedValue={area}
                            style={{ height: 50, width: 150 }}
                            onValueChange={itemValue => this.setArea(itemValue)}
                        >
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
    return{address, suburb};
}

export default connect(mapStateToProps)(Location);