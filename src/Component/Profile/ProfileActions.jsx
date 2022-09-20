import { deleteTranslations } from "../../api/translations";
import { STORAGE_KEY_USER } from "../../const/storageKeys";
import { storageSave, storageDelete } from "../../utils/storage";

function ProfileActions({profile, setProfile}) {
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

    return (
        <>
            <h1>Actions</h1>
            <button onClick={handleClearTranslations}>Clear translation history</button>
            <button onClick={handleLogout}>Logout</button>
        </>
    );
}

export default ProfileActions;