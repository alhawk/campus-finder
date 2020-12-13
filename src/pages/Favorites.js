import React from 'react'
import {useSelector} from "react-redux"
import CampusCard from "../components/CampusCard"

function Favorites() {
    const favorites = useSelector(store => store.campusReducer.favorites)
    return (
        <div class="bg-gray-200 text-gray-800">
            {/* <div><p>{JSON.stringify(favorites)}</p></div> */}
            <div class="flex min-h-screen bg-gray-200 text-gray-800">
                <div class="p-4 w-full">
                    <div class="grid grid-cols-12 gap-4">

                        {/* Fill here.. */}
                        {favorites.map((campus, index) => {
                            return <CampusCard campus={campus} key={index} />
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favorites
