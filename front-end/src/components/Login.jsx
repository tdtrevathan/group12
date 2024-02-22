import {Button, Input, Radio, Select} from './FormFields';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login( {setLoggedIn} ) {

    const[profileComplete, setProfileComplete] = useState(false);

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {

        const { name, value } = e.target;
        setFormData({ 
            ...formData, [name]: value 
        });
        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //Sending login credentials to backend for authentication
            // const response = await fetch('/api/login', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(formData)
            // });

            // if (!response.ok) {
            //     //Handling unsuccessful login
            //     throw new Error('Invalid username or password');
            // }

            if(formData.username == '' || formData.password == '') {
                throw new Error('Invalid username or password');
            }

            //Redirect to profile page when successfully logged in

            setLoggedIn(true);

            if(profileComplete) {
                navigate('/fuelquote')
            }
            else {
                navigate('/profile');
            }
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input name="username" label="Username:" type="text" handleChange={handleChange} />
            <Input name="password" label="Password:" type="password" handleChange={handleChange} />
            {error && <span className="error">{error}</span>}
            <Button type="submit" buttonText="Login" />
            <div className='register'>Don't have an account? <a href="/register">Register</a></div>
        </form>
    );
}
