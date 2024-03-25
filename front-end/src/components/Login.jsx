import { Button, Input } from './FormFields';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login( {setLoggedInUsername} ) {

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
            const responseBody = await fetch('/api/login/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }).then(response => {
                if(!response.ok) {
                    throw new Error('Connection failed');
                }
                return response.json()
            })
            .then (data => {
                return data;
            })

            console.log(responseBody)

            if(formData.username == '' || formData.password == '' || !responseBody.username) {
                throw new Error('Invalid username or password');
            }

            //Redirect to profile page when successfully logged in        
            setLoggedInUsername(formData.username);
            navigate(`/profile`);

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
