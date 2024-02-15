import { FETCH_DATA } from './ActionType'

const initialState = {
    data: []
}

const Reducer = (state = initialState ,{type , payload}) => {
    switch (type) {
        case FETCH_DATA:
            return {...state,data: payload}
        default: return state;
    }
}
export default Reducer;