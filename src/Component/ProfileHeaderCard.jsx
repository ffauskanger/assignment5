import { useNavigate } from "react-router-dom"
import { useProfile } from "../Context/ProfileContext"


const ProfileHeaderCard = () => {
    const navigate = useNavigate()
    const { profile } = useProfile()

    const clickProfile = () => {
        console.log('tryme');
        navigate("/Profile")
    }
    return (
        <>
            
                 
            { profile != null &&
                    <div className='profileCard' onClick={clickProfile}>
                     <span>{profile.username}</span>
                    </div>
            }
                
                 
            
        </>
    )
}

export default ProfileHeaderCard