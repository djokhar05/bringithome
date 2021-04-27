import React, {Component} from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RouterLink } from './common/RouterLink';
import { NativeModules } from 'react-native';
import { connect } from 'react-redux';
import { getStores } from '../redux/actions/storesAction';

const reloadApp = () => NativeModules.DevSettings.reload();

class SideBar extends Component {

    constructor(props) {
      super(props);

      //console.log(props);
    }

    getStores = () => {
        this.props.getStores(
            false,
            1,
            10
        );
        this.props.navigation.goBack();
    }

    render() {
        return (
            <SafeAreaView style={{backgroundColor:'#D3E3F2', height:'100%'}}>
                <RouterLink
                    onPress={() => Actions.Drawer()}
                    Link="Home"
                    icon="home"
                />

                {// <RouterLink
                //     onPress={() => Actions.Home({type: 'reset'})}
                //     Link="Order"
                //     icon="fastfood"
                // />}
                }

                <RouterLink
                    onPress={() => Actions.About()}
                    Link="About"
                    icon="phone"
                />


                <RouterLink
                    onPress={() => Actions.Contact()}
                    Link="Contact"
                    icon="info"
                />

                {
                    // <RouterLink
                    //     onPress={() => Actions.Contact()}
                    //     Link="Media"
                    //     icon="chat"
                    // />
                }


            </SafeAreaView>
        );
    }
}


export default connect(
    null, {getStores}
)(SideBar)