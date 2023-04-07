import {GET_ALL_USERS, GET_USER_ID} from "../Actions/userAction"

const initialState = {
    allUsers:[],
    user:[],
    userId:{}
}

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_ALL_USERS:
            return{
                ...state,
                allUsers: action.payload,
                user: action.payload,
            }
        case GET_USER_ID:
            return{
                ...state,
                user: action.payload,
                userId: action.payload,
            }
        default:
            return {...state}
    }
}

export default userReducer;