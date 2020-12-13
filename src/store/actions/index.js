import axios from "axios"

export function setCampuses (payload) {
    return {
        type : "SET_CAMPUSES",
        payload
    }
}

export function setLoading (payload) {
    return {
        type : "SET_LOADING",
        payload
    }
}

export function setUserData (payload) {
    return {
        type : "SET_USERDATA",
        payload
    }
}

export function setFavorites (payload) {
    return {
        type : "SET_FAVORITES",
        payload
    }
}

export function setUsers (payload) {
    return {
        type : "SET_USERS",
        payload
    }
}

export function fetchCampuses () {
    return (dispatch) => {
        console.log("masuk")
        dispatch(setLoading(true))
        console.log("lanjut")
        axios.get("http://universities.hipolabs.com/search")
            .then(({data}) => {
                dispatch(setCampuses(data))
                dispatch(setLoading(false))
            })
            .catch(err => console.log(err))
    }
}