import React from 'react';
import { Router, Scene, Drawer } from 'react-native-router-flux';
import { Platform } from 'react-native';

import Startup from './components/Startup';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/food/Home';
import SideBar from './components/food/SideBar';
import StoreOffers from './components/food/StoreOffers';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root">
                <Scene 
                    key="startup" 
                    component={Startup}
                    hideNavBar={true}
                    intial
                />


                <Drawer
                    open={false}
                    key="Drawer"
                    contentComponent={SideBar}
                    drawerWidth={300}
                    hideNavBar
                    drawerPosition="right"
                >
                    <Scene key="rootScene">

                        <Scene 
                            key="Menu" 
                            component={Menu}
                            title="Select a Service"
                            titleStyle={{textAlign: 'center'}}
                        />

                    </Scene>
               </Drawer>
                        
                <Scene 
                    key="Home" 
                    component={Home}
                    title="What Would you like to order today ?"
                    titleStyle={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        fontFamily: Platform.OS == 'ios' ? 'system font' : 'cursive'
                    }}
                    navigationBarStyle={{ backgroundColor: '#D3E3F2'}}
                />


               <Scene 
                    key="About" 
                    component={About}
                    title="About"
                />

                <Scene 
                    key="Contact" 
                    component={Contact}
                    title="Contact US"
                />

                <Scene
                    key="StoreOffers" 
                    component={StoreOffers}
                    title="What We Have Available"
                    titleStyle={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        fontFamily: Platform.OS == 'ios' ? 'system font' : 'cursive'
                    }}
                    navigationBarStyle={{ backgroundColor: '#A8D1DF'}}
                />

            </Scene>
        </Router>
    )
}

export default RouterComponent;