import { Button, Input } from './FormFields';

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login( {setLoggedInID} ) {

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
            const id = await fetch('/api/login/signin', {
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
                return data.id;
            })

            if (id == "Not found") {
                throw new Error('Invalid username or password');
            }

            if(formData.username == '' || formData.password == '') {
                throw new Error('Invalid username or password');
            }

            //Redirect to profile page when successfully logged in

            // const id = "65e9eca2a9308d1be0c7c94c"
            console.log("ID: " + id);
            setLoggedInID(id);
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
