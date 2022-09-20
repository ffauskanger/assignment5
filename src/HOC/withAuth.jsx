import { Navigate } from "react-router-dom";
import { useProfile } from "../Context/ProfileContext";

/** Adds authentication to props, redirects if invalid profile*/
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