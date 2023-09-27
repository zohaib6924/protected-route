import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';

const ProtectedRoute = (props) => {
    const { Component } = props
    const navigate = useNavigate();
    const location = useLocation();


    //protected Route
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
          localStorage.setItem('originalPath', location.pathname);
          navigate('/login', { replace: true }); 
        }
      }, [navigate, location.pathname]);
    
      if (!localStorage.getItem('token')) {
        return null;
      }
    
    return (
        <div>
            <Component />
        </div>
    )
}

export default ProtectedRoute

