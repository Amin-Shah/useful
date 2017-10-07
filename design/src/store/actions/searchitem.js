import ActionTypes from './actionTypes'
import * as db from '../../db/fbConf'


export function SearchRequest(searchData){
    return dispatch => {
        dispatch(searchRequest())
        var search = searchData.toLowerCase();
        let currentUser = db.auth.currentUser.uid
        return db.database.ref(`OLXData//Items/${currentUser}`).orderByChild('name').startAt(search).endAt(search + '\uf8ff').on('', snap => {
            let name = snap.val();
            let arr = []
            if(name == null){
                alert('This name is not in the list')
            } else {
                arr.push(name)
                dispatch(searchRequestSuccess(arr))
            }
        })
        .catch((error) => {
            dispatch(searchRequestFailed(error))
            alert('Error occured in ' + error)
        })
    }
}

function searchRequest(){
    return {
        type: ActionTypes.SEARCHREQUEST
    }
}

function searchRequestSuccess(data){
    return {
        type: ActionTypes.SEARCHREQUESTSUCCESS,
        data
    }
}

function searchRequestFailed(){
    return {
        type: ActionTypes.SEARCHREQUESTFAILED
    }
}