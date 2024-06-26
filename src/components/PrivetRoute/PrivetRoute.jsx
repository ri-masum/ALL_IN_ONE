import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types'


const PrivetRoute = ({children}) => {

    const {user,loading}=useContext(AuthContext);
    if(loading){
        return <span className="loading loading-spinner text-error w-1/3 mx-auto"></span>
    }
    if(user){
        return children
    }
    
    return <Navigate to='/signin'></Navigate>
};


export default PrivetRoute;
PrivetRoute.propTypes ={
    children:PropTypes.node
}