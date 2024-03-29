import { Button, Input } from './FormFields';

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration () {
    const navigate=useNavigate();
    const [errors,setErrors]=useState({})
    const [errorClass, setErrorClass]=useState({})
    const [formData, setFormData] =useState({
        username:"",
        password:"",
        checkPassword:"",
    })
    const handleChange = (e)=>{
        const {name,value} = e.target

        if(name == 'password') {
            if(value.length <= 50 && value.length >= 8){
                document.querySelector('#passwordLength').classList.add('valid')
            }
            else {
                document.querySelector('#passwordLength').classList.remove('valid')
            }

            if(/(?=.*[0-9])/.test(value)){
                document.querySelector('#passwordNumber').classList.add('valid');
            }
            else {
                document.querySelector('#passwordNumber').classList.remove('valid');
            }
            
            if(/(?=.*[!@#$%^&*])/.test(value)){
                document.querySelector('#passwordSpecial').classList.add('valid');
            }
            else {
                document.querySelector('#passwordSpecial').classList.remove('valid');
            }

            if(value.toLowerCase() != value){
                document.querySelector('#passwordUppercase').classList.add('valid');
            }
            else {
                document.querySelector('#passwordUppercase').classList.remove('valid');
            }

        }

        errors[name]="",
        errorClass[name]="",
        setFormData({
            ...formData, [name] : value
        })


    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const validationErrors = {}
        const validationErrorClass = {}

        if(!formData.username){
            validationErrors.username = 'ERROR: required'
            validationErrorClass.username = 'error';
        }
        else if(formData.username.length > 50){
            validationErrors.username = 'ERROR: length exceeded'
            validationErrorClass.username = 'error';
        }
        if(!formData.password){
            console.log('ERROR: required')
            validationErrors.password = 'ERROR: required'
            validationErrorClass.password = 'error';
        }
        else if(formData.password.length > 50){
            console.log('ERROR: length exceeded')
            validationErrors.password = 'ERROR: length exceeded'
            validationErrorClass.password = 'error';
        }
        else if(formData.password.length < 8){
            console.log('ERROR: Too small')
            validationErrors.password = 'ERROR: Too small'
            validationErrorClass.password = 'error';
        }
        else if(formData.password.toLowerCase() == formData.password) {
            console.log('ERROR: Must contain at least one uppercase letter')
            validationErrors.password = 'ERROR: Must contain at least one uppercase letter'
            validationErrorClass.password = 'error'; 
        }
        else if(!/(?=.*[0-9])/.test(formData.password)){
            console.log('ERROR: Must contain at least one number')
            validationErrors.password = 'ERROR: Must contain at least one number'
            validationErrorClass.password = 'error';
        }
        else if(!/(?=.*[!@#$%^&*])/.test(formData.password)){
            console.log('ERROR: Must contain at least one special character (!@#$%^&*)')
            validationErrors.password = 'ERROR: Must contain at least one special character (!@#$%^&*)'
            validationErrorClass.password = 'error';
        }
        if(!formData.checkPassword){
            console.log('check ERROR: required')
            validationErrors.checkPassword = 'ERROR: required'
            validationErrorClass.checkPassword = 'error';
        }
        else if(formData.checkPassword !== formData.password){
            console.log('check ERROR: Passwords do not match')
            validationErrors.checkPassword = 'ERROR: Passwords do not match'
            validationErrorClass.checkPassword = 'error';
        }
        setErrors(validationErrors)
        setErrorClass(validationErrorClass)
        
        if(Object.keys(validationErrors).length === 0){
            try {
                await fetch('/api/login/signup', {
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
                .then(data => {
                    if(data.username == "invalid") {
                        setErrors({username: 'ERROR: Username already taken'})
                        setErrorClass({username: 'error'})
                        throw new Error("Username already taken");
                    }
                    alert("User successfully registered");
                    navigate("/")
                });


            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        if(formData.password === formData.checkPassword && formData.password.length > 0) {
            document.querySelector('#passwordMatch').classList.add('valid');
            document.querySelector('#passwordMatch').innerHTML = 'Passwords match'
        }
        else {
            document.querySelector('#passwordMatch').classList.remove('valid');
            document.querySelector('#passwordMatch').innerHTML = "Passwords don't match"
        }
      }, [formData]);

    return (
        <form id="register" onSubmit={handleSubmit}>
            <Input name='username' label='Username: *' type='text' className={errorClass.username} handleChange={handleChange}></Input>
            {errors.username && <span class='error'>{errors.username}</span>}
            <Input name='password' label='Password: *' type='password' className={errorClass.password} handleChange={handleChange}></Input>
            <div id="passwordRequirements">
                <p id="passwordLength">Must be between 8 and 50 characters.</p>
                <p id="passwordSpecial">Must contain at least one special character.</p>
                <p id="passwordNumber">Must contain at least one number.</p>
                <p id="passwordUppercase">Must contain at least one uppercase letter.</p>
            </div>
            <Input name='checkPassword' label='Re-enter Password: *' type='password' className={errorClass.checkPassword} handleChange={handleChange}></Input>
            {/* {errors.checkPassword && <span class='error'>{errors.checkPassword}</span>} */}
            <div id="passwordRequirements">
                <p id="passwordMatch">Passwords don't match</p>
            </div>
            <Button name='submitButton' type='submit' buttonText='Register'></Button>
        </form>
    );
};