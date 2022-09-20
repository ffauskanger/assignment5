import { deleteTranslations } from "../../api/translations";
import { storageSave, storageDelete } from "../../utils/storageSave";

function ProfileActions({profile, setProfile}) {
    async function handleClearTranslations()
    {
        if(profile.translations.length > 0)
        {
            const [error, result] = await deleteTranslations(profile);
            if(error == null)
            {
                setProfile(result)
                storageSave('translation-user', result)
            }
            else
                console.log(error)
        }
    }
    function handleLogout()
    {
        storageDelete('translation-user')
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