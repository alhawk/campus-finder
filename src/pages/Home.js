import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { fetchCampuses } from "../store/actions/index"
import CampusCard from "../components/CampusCard"

function Home() {
    const [campuses, setCampuses] = useState([])
    const [filterSearch, setFilterSearch] = useState('')
    const AllCampuses = useSelector(store => store.campusReducer.campuses)
    const loading = useSelector(store => store.campusReducer.loading)
    const favorites = useSelector(store => store.campusReducer.favorites)
    const dispatch = useDispatch()
    useEffect(() => {
        if (AllCampuses.length === 0) {
            dispatch(fetchCampuses())
        } else {
            setCampuses(AllCampuses)
        }
    }, [])

    useEffect(() => {
        setCampuses(AllCampuses)
    }, [AllCampuses])

    const onchangeCampus = (e) => {
        setFilterSearch(e.target.value)
        const filtered = AllCampuses.filter(campus => {
            if(campus.name.toLowerCase().includes(filterSearch.toLowerCase())) {
                console.log("masuk campuse")
                return campus
            }
        })
        setCampuses(filtered)
    }

    const filterCampus = (e) => {
        e.preventDefault()
        const filtered = AllCampuses.filter(campus => {
            if (campus.name.toLowerCase().includes(filterSearch.toLowerCase())) {
                return campus
            }
        })
        setCampuses(filtered)
    }

    if (loading) {
        return <p>Loading...</p>
    }

    return (
        <div class="bg-gray-200 text-gray-800">
            <div class="m-4 mr-4 w-full h-10 pl-3 pr-2 bg-white border rounded-full flex justify-between items-center relative">
                <input type="search" name="search" id="search" placeholder="Search"
                    onChange={(e) => { onchangeCampus(e) }}
                    class="appearance-none w-full outline-none focus:outline-none active:outline-none" />
                <button
                    onClick={(e) => filterCampus(e)}
                    type="submit" class="ml-1 outline-none focus:outline-none active:outline-none">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        viewBox="0 0 24 24" class="w-6 h-6">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
            </div>
            {/* <div><p>{JSON.stringify(favorites)}</p></div> */}
            <div class="flex min-h-screen bg-gray-200 text-gray-800">
                <div class="p-4 w-full">
                    <div class="grid grid-cols-12 gap-4">

                        {/* Fill here.. */}
                        {campuses.map((campus, index) => {
                            return <CampusCard campus={campus} key={index} />
                        })}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
