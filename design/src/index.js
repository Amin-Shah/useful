import React, { Component } from 'react'
import Routers from './routes/routes'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import store from './store/store'

class Application extends Component{
    render(){
        return(
            <Provider store={store}>
                <Routers />
            </Provider>
        );
    }
}

export default Application;