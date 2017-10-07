import ActionTypes from './actionTypes'
import * as db from '../../db/fbConf'


export function AddRequest(addData){
    return dispatch => {
        dispatch(addRequest())
        let currentUser = db.auth.currentUser.uid;
        return db.database.ref(`OLXData/Items/${currentUser}`).push(addData)
        .then((data) => {
            dispatch(addRequestSuccess(data))
            alert('Items added Successful')
        })
        .catch((error) => {
            dispatch(addRequestFailed(error))
            alert('Error occured in ' + error)
        })
    }
} 


function addRequest(){
    return {
        type: ActionTypes.ADDREQUEST
    }
}

function addRequestSuccess(data){
    return {
        type: ActionTypes.ADDREQUESTSUCCESS,
        data
    }
}

function addRequestFailed(){
    return {
        type: ActionTypes.ADDREQUESTFAILED
    }
}