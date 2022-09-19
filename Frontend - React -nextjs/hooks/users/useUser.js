import { apisApp } from "components/constans/booksApis"
import middleware from "middleware/client"
import { useState } from 'react'
const {clientApp} = middleware
export default function useUser (){

const [isLoading, setIsLoading] = useState(true)
const [user, setUser] = useState({})
    const getAuthUser=()=>{
    clientApp.get(apisApp.auth.get_info_user)
    .then(data =>{
        setUser(data.data)
        setIsLoading(false)
    })
    }

    return{
    user,
    isLoading,
    getAuthUser,
    }
}