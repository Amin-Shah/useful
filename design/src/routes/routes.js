import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Home from '../components/home'
import LoginContainer from '../containers/login'
import SignupContainer from '../containers/signup'

class Routers extends Component{
    render(){
        return (
            <Router>
                <Scene root='root'>
                    <Scene key='login' component={LoginContainer} hideNavBar={true}/>
                    <Scene key='signup' component={SignupContainer} hideNavBar={true}/>
                    <Scene key='home' component={Home} hideNavBar={true}/>
                    {/* <Scene key='electronics' component={} title='Electronic Items'  hideNavBar={false}/> */}
                </Scene>
            </Router>
        );
    }
}

export default Routers;