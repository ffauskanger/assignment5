import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../../api/user'
import { STORAGE_KEY_USER } from '../../const/storageKeys';
import { useProfile } from '../../Context/ProfileContext';
import { storageSave } from '../../utils/storage'

 const usernameConfig = {
    required: true,
    minLength: 3
} 

function SignupForm() {
    const { register, handleSubmit, formState: { errors }} = useForm()
    const { profile, setProfile } = useProfile(null)
    const navigate = useNavigate();

    const [ loading, setLoading ] = useState(false)
    const [ apiError, setApiError ] = useState(null)
    


    useEffect(() => {
        
        if (profile !== null) {
            console.log("User has changed", profile.username, profile.id) // says user has changed at loading
            navigate('/Translate')
            
        }
    }, [ profile, navigate ])

    async function handleOnSubmit(data) {
        setLoading(true)
        console.log(data.username)
        const [error, userObj ] = await loginUser(data.username)
        if (error  != null) {
            setApiError(error)
        }
        if (userObj != null) {
            setProfile(userObj)
            storageSave(STORAGE_KEY_USER, userObj)
        }
        setLoading(false)
    }

    const errorMessage = (() => {
        if(!errors.username )
        {
            return null
        }

        if(errors.username.type === 'type')
            return <p>Username is required</p>

        if(errors.username.type === 'minLength')
            return<p>Username is too short(minium 3)</p>
    })


    return (
        <>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <input label="signup" name="SignupInput" placeholder="Name"
                {...register('username', usernameConfig)}></input>
                <button type='submit' className="btn">Login</button>
                {loading && <p>Logging in...</p>}
                { (errors.username && errors.username.type === 'required') && errorMessage()}
                { (errors.username && errors.username.type === 'minLength') && errorMessage()} 
                { apiError && <p>{apiError}</p>}
            </form>
        </>
    );
}

export default SignupForm;