import actionTypes from '../actions/actionTypes';

const initialState = {
    gender: [],
    roles: [],
    position: []
}

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            console.log('fire event fetch gender start:', action)
            return {
                ...state
            }
        case actionTypes.FETCH_GENDER_SUCCESS:
            let copyState = { ...state };
            copyState.genders = action.data;
            console.log('fire event fetch gender success:', action)
            return {
                ...state
            }
        case actionTypes.FETCH_GENDER_FAILED:
            console.log('fire event fetch gender failed:', action)
            return {
                ...state
            }
        default:
            return state;
    }
}

export default adminReducer;