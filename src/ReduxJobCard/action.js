import { FILTER_JOB_FAILURE, FILTER_JOB_REQUEST, FILTER_JOB_SUCCESS, MASAI_JOB_FAILURE, MASAI_JOB_REQUEST, MASAI_JOB_SUCCESS } from "./action.type"
import axios from "axios"

export const masaiJobCardApiCall = (parmas) => (dispatch) => {
    console.log("page no:",parmas)
    dispatch({ type: MASAI_JOB_REQUEST });
    axios.get(`https://mushy-eel-hat.cyclic.app/jobs?_page=${parmas}&limit=10`)
        .then((r) => dispatch({ type: MASAI_JOB_SUCCESS, payload: r.data }))
        .catch((err) => dispatch({ type: MASAI_JOB_FAILURE, payload: err }))
};


// filter by role api call
export const filterJobApiCall = (parmas) => (dispatch) => {
    console.log("filter action",parmas.filter,parmas.page)
    dispatch({ type: FILTER_JOB_REQUEST });
    axios.get(`https://mushy-eel-hat.cyclic.app/jobs?_page=${parmas.page}&role=${parmas.filter}&limit=10`)
        .then((res) => dispatch({ type: FILTER_JOB_SUCCESS, payload: res.data }))
        .catch((err) => dispatch({ type: FILTER_JOB_FAILURE, payload: err }));
}