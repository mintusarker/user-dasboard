import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';
import useAdmin from '../hooks/useAdmin';


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <p className='text-center my-20'><button className="btn loading">loading...</button></p>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoute;