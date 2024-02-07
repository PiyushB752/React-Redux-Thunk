const FETCH_DATA = "FETCH_DATA"
export const fetchData = (info) =>{
    return{
        type: FETCH_DATA,
        payload: info
    }
} 