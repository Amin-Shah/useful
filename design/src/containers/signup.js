import { connect } from 'react-redux'
import Signup from '../components/signup'
import { SignupRequest } from '../store/actions/signup'


function mapStateToProps(state){
    return {
        application: state.app
    }
}

function mapDispatchToProps(dispatch){
    return {
        signupReq: (data) => dispatch(SignupRequest(data))
    }
}

let SignupContainer = connect(mapStateToProps, mapDispatchToProps)(Signup)

export default SignupContainer;