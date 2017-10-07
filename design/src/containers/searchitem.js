import { connect } from 'react-redux'
import SearchItem from '../components/searchitem'
import { SearchRequest } from '../store/actions/searchitem'


function mapStateToProps(state){
    return {
        application: state.app
    }
}

function mapDispatchToProps(dispatch){
    return {
        searchReq: (data) => dispatch(SearchRequest(data))
    }
}

let SearchItemContainer = connect(mapStateToProps, mapDispatchToProps)(SearchItem)

export default SearchItemContainer;