import * as types from '../constants/ActionTypes'

export const addItem = (item) => {
    return {
        type: types.ADD_ITEM,
        item: item,
    }
}

export const removeItem = (index) => {
    return {
        type: types.REMOVE_ITEM,
        index: index,
    }
}

export const toggle = () => {
    return {
        type: types.TOGGLE
    }
}

export const editItem = (item) => {
    return {
        type: types.EDIT_ITEM,
        item: item
    }
}