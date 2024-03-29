import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Input, Select } from './FormFields';

export default function Profile ( {loggedInUsername, setLoggedInAddress} ) {
    
    const navigate = useNavigate();
    const username = loggedInUsername;

    const states = ['', 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

    const [errors, setErrors] = useState({})
    const [errorClass, setErrorClass] = useState({})
    const [formData, setFormData] = useState({
        username: username,
        fullName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipcode: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        errors[name] = '';
        errorClass[name] = '';

        setFormData({
            ...formData, [name] : value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const validationErrors = {}
        const validationErrorClass = {}

        if(!formData.fullName){
            validationErrors.fullName = 'ERROR: required'
            validationErrorClass.fullName = 'error';
        }
        else if(formData.fullName.length > 50){
            validationErrors.fullName = 'ERROR: length exceeded'
            validationErrorClass.fullName = 'error';
        }
        
        if(!formData.address1){
            validationErrors.address1 = 'ERROR: required'
            validationErrorClass.address1 = 'error';
        }
        else if(formData.address1.length > 100){
            validationErrors.address1 = 'ERROR: length exceeded'
            validationErrorClass.address1 = 'error';
        }

        if(formData.address2 && formData.address2.length > 100){
            validationErrors.address2 = 'ERROR: length exceeded'
            validationErrorClass.address2 = 'error';
        }

        if(!formData.city){
            validationErrors.city = 'ERROR: required'
            validationErrorClass.city = 'error';
        }
        else if(formData.city.length > 100){
            validationErrors.city = 'ERROR: length exceeded'
            validationErrorClass.city = 'error';
        }

        if(!formData.state){
            validationErrors.state = 'ERROR: required'
            validationErrorClass.state = 'error';
        }

        if(!formData.zipcode){
            validationErrors.zipcode = 'ERROR: required'
            validationErrorClass.zipcode = 'error';
        }
        else if(formData.zipcode.length > 9){
            validationErrors.zipcode = 'ERROR: length exceeded'
            validationErrorClass.zipcode = 'error';
        }
        else if(formData.zipcode.length < 5){
            validationErrors.zipcode = 'ERROR: invalid zipcode'
            validationErrorClass.zipcode = 'error';
        }
        else if(/[a-zA-Z]/g.test(formData.zipcode)){
            validationErrors.zipcode = 'ERROR: invalid zipcode'
            validationErrorClass.zipcode = 'error';
        }

        setErrors(validationErrors)
        setErrorClass(validationErrorClass)

        if(Object.keys(validationErrors).length === 0){
            try {

                 const response = await fetch('/api/profile', {
                     method: 'POST',
                     headers: {
                         'Content-Type': 'application/json'
                     },
                     body: JSON.stringify(formData)
                 }).then(response => {
                    if (!response.ok) {
                        //Handling unsuccessful creation
                        throw new Error('Did not create profile');
                    }
                    return response.json();
                 }).then(data => {
                    console.log(data);
                    var address2String = data.address2 != null ? data.address2 + " " : "";
                    setLoggedInAddress(data.address1 + " " + address2String + data.city + ", " + data.state + " " + data.zipcode)
                 });
                 
                 //To show that post works
                 console.log(response);
                 
                 

            } catch (error) {
                // setError(error.message);
            }
        }
    }

    async function getProfile(){

        return await fetch(`/api/profile/${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => response.json())
        .then(data => {

            var tempForm = data;
            tempForm.username = loggedInUsername;
            setFormData(tempForm);
            
            let fullName = document.getElementsByName('fullName');
            let address1 = document.getElementsByName('address1');
            let address2 = document.getElementsByName('address2');
            let city = document.getElementsByName('city');
            let state = document.getElementsByName('state');
            let zipcode = document.getElementsByName('zipcode');

            fullName[0].value = data.fullName;
            address1[0].value = data.address1;
            address2[0].value = data.address2;
            city[0].value = data.city;
            state[0].value = data.state;
            zipcode[0].value = data.zipcode;

            var address2String = data.address2 != null ? data.address2 + " " : "";
            setLoggedInAddress(data.address1 + " " + address2String + data.city + ", " + data.state + " " + data.zipcode)

        })
        .catch(e => {
          console.log(e);
        })
    }

    useEffect(() => {

        if(!loggedInUsername) {
            navigate('/')
            return;
        }

        getProfile();

      }, []);

    return (
        <>

        <form onSubmit={handleSubmit}>
            
            <label>Username:</label>
            <div class="username">{loggedInUsername}</div>
            <Input name='fullName' label='Full Name: *' type='text' className={errorClass.fullName} handleChange={handleChange}></Input>
            {errors.fullName && <span class='error'>{errors.fullName}</span>}
            
            <Input name='address1' label='Address 1: *' type='text' className={errorClass.address1} handleChange={handleChange}></Input>
            {errors.address1 && <span class='error'>{errors.address1}</span>}
            
            <Input name='address2' label='Address 2:' type='text' className={errorClass.address2} handleChange={handleChange}></Input>
            
            {errors.address2 && <span class='error'>{errors.address2}</span>}
            <div id="cityStateGrid">
                <div id="cityContainer">
                    <Input name='city' label='City: *' type='text' className={errorClass.city} handleChange={handleChange}></Input>
                    {errors.city && <span class='error'>{errors.city}</span>}
                </div>
                <div id="stateContainer">
                    <Select name='state' label='State: *' codes={states} className={errorClass.state} handleChange={handleChange}></Select>
                    {errors.state && <span class='error'>{errors.state}</span>}
                </div>
            </div>
            
            <Input name='zipcode' label='Zipcode: *' type='text' className={errorClass.zipcode} handleChange={handleChange}></Input>
            {errors.zipcode && <span class='error'>{errors.zipcode}</span>}

            <Button name='submitButton' type='submit' buttonText='Save'></Button>
        </form>
        </>
    )
}