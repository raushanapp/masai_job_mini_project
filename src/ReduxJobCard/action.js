import { MASAI_JOB_FAILURE, MASAI_JOB_REQUEST, MASAI_JOB_SUCCESS } from "./action.type"
import axios from "axios"

export const masaiJobCardApiCall = () => (dispatch) => {
    
    dispatch({ type: MASAI_JOB_REQUEST });
    axios.get(`https://mushy-eel-hat.cyclic.app/jobs?_page=1&limit=10`)
        .then((r) => dispatch({ type: MASAI_JOB_SUCCESS, payload: r.data}))
        .catch((err)=>dispatch({type:MASAI_JOB_FAILURE,payload:err}))
}