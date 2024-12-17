import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const isAuthenticated = localStorage.getItem('authToken'); // Check if user is authenticated (you can adjust this based on your auth method)
    
    return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute