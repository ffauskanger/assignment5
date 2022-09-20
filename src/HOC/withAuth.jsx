import { Navigate } from "react-router-dom";
import { useProfile } from "../Context/ProfileContext";

const withAuth = Component => props => {
    const { profile } = useProfile()
    if(profile !== null)
    {
        return <Component {...props}/>
    }
    else
    {
        return <Navigate to="/" />
    }
}

export default withAuth