import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import {setFavorites} from "../store/actions/index"

function CampusCard(props) {
    const favorites = useSelector(store => store.campusReducer.favorites)
    const { campus } = props
    const dispatch = useDispatch()
    const addFavorite = (item) => {
        const found = favorites.find(el => el.name === item.name)
        if(!found) {
            dispatch(setFavorites(item))
        }   
    }
    return (
        <div class="col-span-12 sm:col-span-6 md:col-span-4">
            <div class="flex flex-row bg-white shadow-sm rounded p-4">
                <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <div class="flex flex-col flex-grow ml-4">
                    <div class="text-sm text-gray-500">{campus.country}</div>
                    <div class="font-bold text-lg"><a href={campus.web_pages[0]}>{campus.name}</a></div>
                </div>
                <div class="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl text-blue-200">
                    <svg 
                    onClick={() => addFavorite(campus)}
                    class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </div>
            </div>
        </div>

    )
}

export default CampusCard
