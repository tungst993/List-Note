import * as types from '../constants/ActionTypes'

const innitalState = [
    "Hi", "Hello", "Nextsmarty"
  
]


const mangReducer = (state = innitalState, action ) => {
    switch (action.type) {
        case types.ADD_ITEM:
            return [...state, action.item]
        case types.REMOVE_ITEM:
            return state.filter((e,i) => i != action.index)
        default:
            return state
    }
}


export default mangReducer;
