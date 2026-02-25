import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch()

  const logouthandler = async () => {
    try {
      await authService.logout()
      dispatch(logout())
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <button
      className='px-4 py-1.5 text-sm font-medium border border-white text-white hover:bg-white hover:text-black transition-colors duration-200 rounded-sm'
      onClick={logouthandler}
    >
      Logout
    </button>
  )
}

export default LogoutBtn
