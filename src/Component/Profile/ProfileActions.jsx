import { useNavigate } from "react-router-dom";
import { deleteTranslations } from "../../api/translations";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { storageSave, storageDelete } from "../../utils/storage";

function ProfileActions({profile, setProfile}) {
    const navigate = useNavigate()
    async function handleClearTranslations()
    {
        if(profile.translations.length > 0)
        {
            const [error, result] = await deleteTranslations(profile);
            if(error == null)
            {
                setProfile(result)
                storageSave(STORAGE_KEY_USER, result)
            }
            else
                console.log(error)
        }
    }
    function handleLogout()
    {
        storageDelete(STORAGE_KEY_USER)
        setProfile(null)
    }
    function redirectToTranslate() {
        navigate('/translate')
    }

    return (
        <>
            <div className="profileBtnContainer">
                <button className="profileBtn" onClick={redirectToTranslate}>Translate</button>
                <button className="profileBtn" onClick={handleClearTranslations}>Clear translation history</button>
                <button className="profileBtn" onClick={handleLogout}>Logout</button>
            </div>
            
        </>
    );
}

export default ProfileActions;