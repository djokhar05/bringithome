import React, {Component} from 'react';
import {Text, SafeAreaView, View, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { RouterLink } from './common/RouterLink';
import { NativeModules } from 'react-native';

const reloadApp = () => NativeModules.DevSettings.reload();

export default class SideBar extends Component {
    render() {
        return (
            <SafeAreaView style={{backgroundColor:'#fff', height:'100%'}}>
                <RouterLink
                    onPress={reloadApp}
                    Link="Order"
                    icon="fastfood"
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
