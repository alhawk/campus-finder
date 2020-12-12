import axios from "axios"

export function setAllCampuses (payload) {
    return {
        type : "SET_ALL_CAMPUSES",
        payload
    }
}

export function fetchCampuses () {
    return (dispatch) => {
        console.log("masuk")
        axios.get("http://universities.hipolabs.com/search")
            .then(data => {
                console.log(data, "this is data")
                dispatch(setAllCampuses(data))
            })
            .catch(err => console.log(err))
    }
}