import { useSelector } from "react-redux";
import {useLocation, Navigate} from 'react-router-dom';


const ProtectedRoute = ({children})=>{
    const {isAuthenticated} = useSelector(state => state.auth);
    const location = useLocation();
    if(!isAuthenticated){

        return(
            <Navigate to='/home/login' replace state={{from:location}} />
        )
    }
    else{
        return(
            <div>
                {children}
            </div>
        )
    }
  
};

export default ProtectedRoute;