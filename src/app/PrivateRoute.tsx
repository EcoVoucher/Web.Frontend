import { handleGetCookie, handleSetCookie } from '@/components/hocs/cookieSession';
import axios from 'axios';
import { env } from "@/config/env";
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
    children: JSX.Element;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    
    
    
    // const apiUrl = `${}/user`;
    const isAuthenticated = handleGetCookie;
    let res = axios.post(`${env.apiBaseUrl}/api/auth`, {}, {
        headers: {
            'Content-Type': 'application/json',
            'access-token': `${handleGetCookie()}`
        }
    }).then((response) => {
        console.log(response.data.access_token);
        //criptografarJs(response.data.access_token);
        handleSetCookie(response.data.access_token);
        console.log(response.data);
    }).catch((err) => {
        console.log(err);
    })
    console.log(isAuthenticated);

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
