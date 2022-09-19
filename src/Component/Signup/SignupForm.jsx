import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/user'
import { useProfile } from '../../HOC/ProfileContext'

function SignupForm() {
    const { register, handleSubmit, formState: { errors }} = useForm()
    const [ user, setUser ] = useState(null)


    async function handleOnSubmit(data) {
        
        console.log(data.username)
        const [error, userObj ] = await loginUser(data.username)
        console.log(userObj)
        console.log(error)
        
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <input label="signup" name="SignupInput" placeholder="Name"
                {...register('username', {required: 'A name is required'})}></input>
                <button type='submit' className="btn">Enter</button>
            </form>
        </>
    );
}

export default SignupForm;