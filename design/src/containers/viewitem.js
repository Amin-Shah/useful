import { connect } from 'react-redux'
import ViewItem from '../components/viewitem'
import { ViewRequest } from '../store/actions/viewitem'


function mapStateToProps(state){
    return {
        application: state.app
    }
}

function mapDispatchToProps(dispatch){
    return {
        viewItemReq: (data) => dispatch(ViewRequest(data)) 
    }
}

let ViewItemContainer = connect(mapStateToProps, mapDispatchToProps)(ViewItem)

export default ViewItemContainer;