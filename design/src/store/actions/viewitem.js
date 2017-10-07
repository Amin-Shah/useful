import ActionTypes from './actionTypes'
import * as db from '../../db/fbConf'


export function ViewRequest(){
    return dispatch => {
        dispatch(viewRequest())
        let currentUser = db.auth.currentUser.uid
        return db.database.ref(`OLXData//Items/${currentUser}`).on('value', snap => {
            let arr = [];
            let items = snap.val();
            arr.push(items)
            dispatch(viewRequestSucces(arr))
        })
    }
}

function viewRequest(){
    return {
        type: ActionTypes.VIEWREQUEST
    }
}

function viewRequestSucces(data){
    return {
        type: ActionTypes.VIEWREQUESTSUCCESS,
        data
    }
}

function viewRequestFailed(){
    return {
        type: ActionTypes.VIEWREQUESTFAILED
    }
}