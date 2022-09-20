import { useState } from 'react';
import { getPublicImagePath } from './imageMap';
import { useForm } from 'react-hook-form'
import { addTranslation } from '../../api/translations';
import { storageSave } from '../../utils/storage';
import { STORAGE_KEY_USER } from '../../const/storageKeys';

function TranslateForm({profile, setProfile}) {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [imagesToRender, setImagesToRender] = useState([])

    async function handleOnSubmit(data) {
        setImagesToRender([...data.translate.replace(/[^A-Za-z]/gi, '').toLowerCase()])
        const [error, result] = await addTranslation(profile,data.translate);
        if(error == null)
        {
            setProfile(result)
            storageSave(STORAGE_KEY_USER, result)
        }
        else
            console.log(error)
    }

    function handleChange(data)
    {
        data.target.value = data.target.value.replace(/[^A-Za-z\\ ]/gi, '')
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleOnSubmit)} onChange={handleChange} className="translateForm">
                <input type="text" placeholder='What do you want translated?'
                    {...register('translate', 
                    {required: true}
                    )}/>
                <button type='submit'>Submit</button>
                {errors.translate && <p>You must input something</p>}
            </form>
            <div className='images'>
                {
                    
                    imagesToRender.map( (item, index) => {
                        return (
                            <img src={ getPublicImagePath(item) } alt={`img${index}`} key={index} />
                        )
                    })
                }
            </div>
        </>
    );
}

export default TranslateForm