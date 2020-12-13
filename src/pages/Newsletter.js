import React from 'react'
import {useSelector} from 'react-redux'

function Newsletter() {
    const AllCampuses = useSelector(store => store.campusReducer.campuses)
    const userData = useSelector(store => store.campusReducer.userData)

    return (
        <div class="bg-gray-200 text-gray-800 w-full h-screen justify-center mx-auto text-center">
            <a  
                href={
                    "data:text/json;charset=utf-8," +
                    encodeURIComponent(JSON.stringify(AllCampuses))
                }
                download="users.json"
            >
                Download JSON
      </a>
        </div>
    )
}

export default Newsletter
