import { useState } from 'react';
import { getPublicImagePath } from './imageMap';
import { useForm } from 'react-hook-form'

function TranslateForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [imagesToRender, setImagesToRender] = useState([])

    function handleOnSubmit(data) {
        console.log(data.translate); // POST msg
        setImagesToRender([...data.translate.replace(/[^A-Za-z]/gi, '')])
    }

    function handleChange(data)
    {
        data.target.value = data.target.value.replace(/[^A-Za-z\ ]/gi, '')
    }

    return (
        <>
            <form onSubmit={handleSubmit(handleOnSubmit)} onChange={handleChange}>
                <input type="text" placeholder='What do you want translated?'
                    {...register('translate', 
                    {required: true}
                    )}/>
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