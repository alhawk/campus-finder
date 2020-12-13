const initialState = {
    campuses: [],
    favorites: [],
    loading: false,
    userData: {},
    users: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "SET_FAVORITES":
            return { ...state, favorites: state.favorites.concat(action.payload) }
        case "SET_CAMPUSES":
            return { ...state, campuses: action.payload }
        case "SET_LOADING":
            return { ...state, loading: action.payload }
        case "SET_USERDATA":
            return { ...state, userData: action.payload }
        case "SET_USERS":
            return { ...state, users: state.users.concat(action.payload )}
        default:
            return state
    }
}