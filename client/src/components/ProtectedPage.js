import { message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { GetLoggedInUser } from '../apicalls/users'

function ProtectedPage({children}) {
    const navigate=useNavigate()
    const [user,setUser]=useState(null)
    const getUser=async()=>{
        try{
            const response=await GetLoggedInUser()
            if(response.success)
            {
                setUser(response.data)
            }
            else 
            {
                throw new Error(response.message)
            }
        }
        catch(error)
        {
            message.error(error.message);
            localStorage.removeItem("token");
            navigate("/login");
        }
    }

    useEffect(()=>{
        const fetchData = async () => {
            if(localStorage.getItem("token"))
            {
                await getUser();
            }
            else 
            {
                navigate('/login');
            }
        };
        
        fetchData();
    }, [getUser, navigate]);

  return (
    <div>
        <h1>Protected Page</h1>
        <h4>
            Welcome {user?.firstName}
        </h4>
        {children}
    </div>
  )
}

export default ProtectedPage
