import { connect } from 'react-redux'
import AddItem from '../components/additem'
import { AddRequest } from '../store/actions/additem'


function mapStateToProps(state){
    return {
        application: state.app
    }
}

function mapDispatchToProps(dispatch){
    return {
        addItemReq: (data) => dispatch(AddRequest(data))
    }
}

let AddItemContainer = connect(mapStateToProps, mapDispatchToProps)(AddItem)

export default AddItemContainer;