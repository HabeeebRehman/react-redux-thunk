import {FETCH_DATA} from './ActionType'
import axios from "axios";

export const getData = () => (dispatch) => {
    axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => dispatch(fetchDataAction(res.data)))
        .catch((err) => console.log(err))
}

export const fetchDataAction = (payload) => {
    return {
        type: FETCH_DATA,
        payload
    }
}