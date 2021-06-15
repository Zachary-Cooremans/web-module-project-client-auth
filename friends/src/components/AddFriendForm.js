import React, {useState} from 'react'
import { useHistory } from 'react-router'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialValues = {
    name: '',
    age: '',
    email: ''
}

export default function AddFriendForm() {
    const [formValues, setFormValues] = useState(initialValues)
    const {push} = useHistory()

    const handleChanges = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axiosWithAuth()
        .post('/api/friends', formValues)
        .then((res) => {
            console.log(res)
            push('/friends')
        })
        .catch((err) => {
            console.log({err})
        })
    }

    return (
        <div>
            <h3>Add New Friend</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor='Name'>name</label>
                <input 
                    id='name'
                    name='name'
                    value={formValues.name}
                    onChange={handleChanges}
                />

                <label htmlFor='Age'>age</label>
                <input 
                    id='age'
                    name='age'
                    value={formValues.age}
                    onChange={handleChanges}
                />

                <label htmlFor='Email'>email</label>
                <input 
                    id='email'
                    name='email'
                    value={formValues.email}
                    onChange={handleChanges}
                />
                <button>Add Friend</button>
            </form>
        </div>  
    )
}
