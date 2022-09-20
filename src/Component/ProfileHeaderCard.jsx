import { useNavigate } from "react-router-dom"
import { useProfile } from "../Context/ProfileContext"

/** Displays profile card if user is logged in, else hides it. Adds navigation to profile page */
const ProfileHeaderCard = () => {
    const navigate = useNavigate()
    const { profile } = useProfile()

    const clickProfile = () => {
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