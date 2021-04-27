import React from 'react';
import { Router, Scene, Drawer, Tabs } from 'react-native-router-flux';

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import SideBar from './components/SideBar';
import StoreOffers from './components/StoreOffers';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root">
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
                            key="Home" 
                            component={Home}
                            title="What Would you like to order today ?"
                            initial
                            navigationBarStyle={{ backgroundColor: '#D3E3F2'}}
                        />

                    </Scene>
               </Drawer>

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
                    navigationBarStyle={{ backgroundColor: '#A8D1DF'}}
                />


            </Scene>
        </Router>
    )
}

export default RouterComponent;