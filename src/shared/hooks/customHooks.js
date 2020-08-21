import { useState } from 'react';

const useForm = (callback, initState = {}) => {
    const [inputs, setInputs] = useState(initState)

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setInputs({ ...inputs, [name]: value })
    }

    const handleSubmitForm = (event) => {
        if (event) {
            event.preventDefault();
        }
        callback();
    }

    return { handleInputChange, inputs, handleSubmitForm }
}

export { useForm }