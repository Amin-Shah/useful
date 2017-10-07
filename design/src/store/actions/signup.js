import ActionTypes from './actionTypes'
import { Actions } from 'react-native-router-flux';
import * as db from '../../db/fbConf'

export function SignupRequest(signupData){
    return dispatch => {
        dispatch(signupRequest())
        return db.auth.createUserWithEmailAndPassword(
            signupData.email, signupData.password
        )
        .then((data) => {
            let userRef = db.database.ref('OLXData/userdata/' + data.uid)
            userRef.set({
                uid: data.uid,
                name: signupData.name,
                email: data.email
            }, signupSuccessData => {
                dispatch(signupRequestSuccess({uid: data.uid, name: signupData.name, email: data.email}));
            });
            Actions.login();
        })
        .catch((error) => {
            dispatch(signupRequestFailed(error))
            alert('Error occured in ' + error)
        })
    }
}

function signupRequest(){
    return {
        type: ActionTypes.SIGNUPREQUEST
    }
}

function signupRequestSuccess(data){
    return {
        type: ActionTypes.SIGNUPREQUESTSUCCESS,
        data
    }
}

function signupRequestFailed(){
    return {
        type: ActionTypes.SIGNUPREQUESTFAILED
    } 
}