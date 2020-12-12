

const initialState = {
    campuses: [],
    favorites: [],
    loading: false
}

export default function reducer (state = initialState, action) {
    switch(action.type) {
        case "SET_FAVORITES":
            return {...state, favorites: action.payload}
        case "SET_ALL_CAMPUSES": 
            return {...state, campuses: action.payload}
        
            default:
            return state
    }
}