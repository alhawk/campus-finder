import React, {useState, useEffect} from 'react'
import {useStore, useDispatch} from "react-redux"
import {fetchCampuses} from "../store/actions/index"

function Home() {
    const [campuses, setCampuses] = useState([])
    const AllCampuses = useStore(store => store.campusReducer.AllCampuses)
    const loading = useStore(store => store.campusReducer.loading)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCampuses())
    }, [AllCampuses])

    if(loading) {
        return <p>Loading... </p>
    }
    
    return (
        <div>
            <p>This is home..</p>
            <p>{JSON.stringify(AllCampuses)}</p>
        </div>
    )
}

export default Home
