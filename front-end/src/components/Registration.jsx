import {Button, Input, Radio, Select} from './FormFields';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration () {
    const navigate=useNavigate();
    const [errors,setErrors]=useState({})
    const [errorClass, setErrorClass]=useState({})
    const [formData, setFormData] =useState({
        firstName:"",
        lastName:"",
        username:"",
        password:"",
        checkPassword:"",
    })
    const handleChange = (e)=>{
        const {name,value} = e.target
        errors[name]="",
        errorClass[name]="",
        setFormData({
            ...formData, [name] : value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const validationErrors = {}
        const validationErrorClass = {}
        if(!formData.firstName){
            validationErrors.firstName = 'ERROR: required'
            validationErrorClass.firstName = 'error';
        }
        else if(formData.firstName.length > 15){
            validationErrors.fullName = 'ERROR: length exceeded'
            validationErrorClass.fullName = 'error'; 
        }
        if(!formData.lastName){
            validationErrors.lastName = 'ERROR: required'
            validationErrorClass.lastName = 'error';
        }
        else if(formData.lastName.length > 35){
            validationErrors.lastName = 'ERROR: length exceeded'
            validationErrorClass.lastName = 'error';
        }
        if(!formData.username){
            validationErrors.username = 'ERROR: required'
            validationErrorClass.username = 'error';
        }
        else if(formData.username.length > 50){
            validationErrors.username = 'ERROR: length exceeded'
            validationErrorClass.username = 'error';
        }
        if(!formData.password){
            validationErrors.password = 'ERROR: required'
            validationErrorClass.password = 'error';
        }
        else if(formData.password.length > 50){
            validationErrors.password = 'ERROR: length exceeded'
            validationErrorClass.fullName = 'error';
        }
        else if(formData.password.length < 10){
            validationErrors.password = 'ERROR: Too small'
            validationErrorClass.fullName = 'error';
        }
        else if(!/(?=.*[0-9])/.test(formData.password)){
            validationErrors.password = 'ERROR: Must contain at least one number'
            validationErrorClass.fullName = 'error';
        }
        else if(!/(?=.*[!@#$%^&*])/.test(formData.password)){
            validationErrors.password = 'ERROR: Must contain at least one special character (!@#$%^&*)'
            validationErrorClass.fullName = 'error';
        }
        if(!formData.checkPassword){
            validationErrors.checkPassword = 'ERROR: required'
            validationErrorClass.checkPassword = 'error';
        }
        else if(formData.checkPassword !== formData.password){
            validationErrors.checkPassword = 'ERROR: Passwords do not match'
            validationErrorClass.fullName = 'error';
        }
        setErrors(validationErrors)
        setErrorClass(validationErrorClass)
        
        if(Object.keys(validationErrors).length === 0){
            navigate("/")
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <Input name='firstName' label='First Name: *' type='text' className={errorClass.firstName} handleChange={handleChange}></Input>
            {errors.firstName && <span class='error'>{errors.firstName}</span>}
            <Input name='lastName' label='Last Name: *' type='text' className={errorClass.lastName} handleChange={handleChange}></Input>
            {errors.lastName && <span class='error'>{errors.lastName}</span>}
            <Input name='username' label='Username: *' type='text' className={errorClass.username} handleChange={handleChange}></Input>
            {errors.username && <span class='error'>{errors.username}</span>}
            <Input name='password' label='Password: *' type='text' className={errorClass.password} handleChange={handleChange}></Input>
            {errors.password && <span class='error'>{errors.password}</span>}
            <Input name='checkPassword' label='Re-enter Password: *' type='text' className={errorClass.checkPassword} handleChange={handleChange}></Input>
            {errors.checkPassword && <span class='error'>{errors.checkPassword}</span>}
            <Button name='submitButton' type='submit' buttonText='Register'></Button>
        </form>
    );
};