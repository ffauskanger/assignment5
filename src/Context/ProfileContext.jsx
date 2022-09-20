import { useState, createContext, useContext } from "react"
import { storageRead } from "../utils/storageSave";

export const ProfileContext = createContext(null)

export const useProfile = () => {
    console.log('context change!');
    return useContext(ProfileContext) // reads { user, setUser }
}

const ProfileProvider = ({ children }) => {

    const [profile, setProfile] = useState(storageRead('translation-user'))

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
