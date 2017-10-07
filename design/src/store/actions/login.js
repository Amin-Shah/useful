import ActionTypes from './actionTypes'
import * as db from '../../db/fbConf'
import { Actions } from 'react-native-router-flux'

export function LoginRequest(loginData) {
    return dispatch => {
        dispatch(loginRequest())
        db.auth.signInWithEmailAndPassword(
            loginData.email, loginData.password
        )
            .then((data) => {
                return db.database.ref('OLXData/userdata/' + data.uid).once('value', snap => {
                    let userData = snap.val();
                    userData.uid = data.uid;
                    dispatch(loginRequestSuccess(userData))
                    Actions.home()
                })
            })
            .catch((error) => {
                dispatch(loginRequestFailed(error))
                alert('Error occured in ' + error)
            })
    }
}

function loginRequest() {
    return {
        type: ActionTypes.LOGINREQUEST
    }
}

function loginRequestSuccess(data) {
    return {
        type: ActionTypes.LOGINREQUESTSUCCESS,
        data
    }
}

function loginRequestFailed() {
    return {
        type: ActionTypes.LOGINREQUESTFAILED
    }
}