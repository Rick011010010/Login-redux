import React from 'react'
import {useDispatch} from "react-redux"
import {login, logout} from "../features/User"

function Login() {
    const dispatch = useDispatch()
  return (
    <div>
        <button className='p-3 bg-gray-300' onClick={() =>
        {dispatch(login({name:'oussama', age: 29 , email: 'oussama.elmyar@gmail.com'}))
        }}>Login</button>

        <button className='p-3 bg-gray-300' onClick={() =>
        {dispatch(logout())}}>Logout</button>
    </div> 
  )
}

export default Login