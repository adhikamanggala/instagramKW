import {
    PHOTO_UPDATE,
    PHOTO_CREATE
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PHOTO_CREATE:
            return INITIAL_STATE;
        case PHOTO_UPDATE:
            return { ...state, [action.payload.prop]: action.payload.value };
        default:
            return state;
    }
};