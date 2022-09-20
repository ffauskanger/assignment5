import { useState, createContext, useContext } from "react"
import { STORAGE_KEY_USER } from "../const/storageKeys";
import { storageRead } from "../utils/storage";

export const ProfileContext = createContext(null)

export const useProfile = () => {
    console.log('context change!');
    return useContext(ProfileContext) // reads { user, setUser }
}

const ProfileProvider = ({ children }) => {

    const [profile, setProfile] = useState(storageRead(STORAGE_KEY_USER))

    const state = {
        profile,
        setProfile
    }

    return (
        <ProfileContext.Provider value={ state }>
            {children}
        </ProfileContext.Provider>
    )
}
export default ProfileProvider
