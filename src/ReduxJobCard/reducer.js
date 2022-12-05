import { MASAI_JOB_FAILURE, MASAI_JOB_REQUEST, MASAI_JOB_SUCCESS } from "./action.type";

const initialState = {
    isLoading: false,
    isError: false,
    job: []
}

export const reducer = (state = initialState, { type, payload }) => {
    
    switch (type) {
        case MASAI_JOB_REQUEST: {
            return {
                isLoading: true,
                isError:false,
            }
        }
        case MASAI_JOB_SUCCESS: {
            console.log("payload",payload)
            return {
                isLoading: false,
                isError: false,
                job:payload
            }
        }
        case MASAI_JOB_FAILURE: {
            return {
                isLoading: false,
                isError:ture
            }
        }
        default: {
            return state
        }
    }
}