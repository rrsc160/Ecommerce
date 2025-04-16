import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyOrdersPage from './MyOrdersPage'

const Profile = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear auth data (modify based on your app's storage strategy)
        localStorage.removeItem('authToken');  // <-- Replace with your actual key
        // Navigate to login page
        navigate('/login');
    }

    return (
        <div className='min-h-screen flex flex-col'>
            <div className='flex-grow container mx-auto p-4 md:p-6'>
                <div className='flex flex-col md:flex-row md:space-x-6 md:space-y-0'>
                    <div className='w-full md:w-1/2 lg:w-1/4 shadow-md rounded-lg p-6'>
                        <h1 className='text-2xl md:text-3xl font-bold mb-4'>Rohit Chaudhari</h1>
                        <p className='text-lg text-gray-600 mb-4'>rohit123@gmail.com</p>
                        <button 
                            onClick={handleLogout}
                            className='w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600'
                        >
                            Logout
                        </button>
                    </div>
                    {/* Right section:orders table */}
                    <div className='w-full md:w-2/3 lg:w-3/4'>
                        <MyOrdersPage />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
