import React from 'react';
import { Provider } from 'react-redux';
import RouterComponent from './Router';
import store from './redux/store';

const App = () => {

    return(
        <Provider store={store}>
            <RouterComponent />
        </Provider>
    )
}

export default App;