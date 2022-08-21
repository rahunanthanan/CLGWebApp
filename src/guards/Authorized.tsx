import React from 'react'
import {Navigate, useLocation} from 'react-router-dom'

import {useAuth} from '@/hooks/useAuth'

interface Props {
    children: React.ReactElement
}

const Authorized = ({children}: Props) => {
    const {isLoggedIn} = useAuth()
    const location = useLocation()

    if(!isLoggedIn) {
        return  <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default Authorized
