import { useState } from 'react';
import { getPublicImagePath } from './imageMap';
import { useForm } from 'react-hook-form'

function TranslateForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [imagesToRender, setImagesToRender] = useState([])

    function handleOnSubmit(data) {
        setImagesToRender([...data.translate.replace(/[^a-z0-9]/gi, '')])
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleOnSubmit)}>
                <input type="text" placeholder='What do you want translated?'
                    {...register('translate', {required: 'Add translation!'})}/>
                <button type='submit'>Submit</button>
            </form>
            {
                
                imagesToRender.map( (item, index) => {
                    return (
                        <img src={ getPublicImagePath(item) } alt={`img${index}`} key={index} />
                    )
                })
            }
        </>
    );
}

export default TranslateForm