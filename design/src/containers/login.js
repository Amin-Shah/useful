import { connect } from 'react-redux'
import Login from '../components/login'
import { LoginRequest } from '../store/actions/login'

function mapStateToProps(state){
    return {
        application: state.app
    }
} 

function mapDispatchToProps(dispatch){
    return {
        loginReq: (data) => dispatch(LoginRequest(data))
    }
}

var LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginContainer;