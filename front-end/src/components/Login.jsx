import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState(null);
    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            //Sending login credentials to backend for authentication
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                //Handling unsuccessful login
                throw new Error('Invalid username or password');
            }

            //Redirect to profile page when successfully logged in
            history.push('/profile');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input name="username" label="Username:" type="text" onChange={handleChange} />
            <Input name="password" label="Password:" type="password" onChange={handleChange} />
            {error && <p style={{ color: 'red' }}>{error}</p>} {"Incorrect username or password"}
            <Button type="submit" buttonText="Login" />
        </form>
    );
}
