import React, { useEffect, useState } from 'react';
import { useNavigate, useBlocker } from "react-router-dom";
import { Button, Input, Select } from './FormFields';

export default function Profile ( {loggedInUsername, setLoggedInAddress} ) {
    
    const navigate = useNavigate();
    const username = loggedInUsername;
    const [confirmation, setConfirmation] = useState()
    const states = ['', 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

    const [errors, setErrors] = useState({})
    const [errorClass, setErrorClass] = useState({})
    const [intialFormData, setIntialFormData] = useState({});
    const [formData, setFormData] = useState({
        username: username,
        fullName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zipcode: ""
    })

    let blocker = useBlocker(intialFormData !== formData);
    useEffect(() => {
        const confirmationMessage = 'Are you sure you want to leave? You have unsaved changes.';

        if(blocker.state === "blocked") {

            if(window.confirm(confirmationMessage)) {
                blocker.proceed();
                blocker.reset();
            }
        }

    }, [blocker]);

    const handleChange = (e) => {
        const {name, value} = e.target

        errors[name] = '';
        errorClass[name] = '';

        setFormData({
            ...formData, [name] : value
        })
        setConfirmation('');
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
                    else{
                        setConfirmation('Saved Successfully')
                    }
                    return response.json();
                 }).then(data => {
                    
                    setFormData(data);
                    setIntialFormData(data);
                    
                    var address2String = data.address2 != null ? data.address2 + " " : "";
                    if(data.address1) {
                        setLoggedInAddress(data.address1 + " " + address2String + data.city + ", " + data.state + " " + data.zipcode)
                    }
                 });
                
            } catch (error) {
                // setError(error.message);
            }
        }
    }

    function setForm(data) {

        var tempForm = data;
        tempForm.username = loggedInUsername;
        setFormData(tempForm);
        setIntialFormData(tempForm);

        document.getElementById('fullName').value = data.fullName;
        document.getElementById('address1').value = data.address1;
        document.getElementById('address2').value = data.address2;
        document.getElementById('city').value = data.city;
        document.getElementById('state').value = data.state;
        document.getElementById('zipcode').value = data.zipcode;

        var address2String = data.address2 != null ? data.address2 + " " : "";
        if(data.address1) {
            setLoggedInAddress(data.address1 + " " + address2String + data.city + ", " + data.state + " " + data.zipcode)
        }

        if(blocker.state === "blocked") {
            blocker.reset();
        }

    }

    async function getProfile(){

        return await fetch(`/api/profile/${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => setForm(data))
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

            <Input
                name='username'
                label="Username:"
                type='text'
                className={'readonly'}
                value={loggedInUsername}
                readOnly
            ></Input>

            <Input name='fullName' label='Full Name: *' type='text' className={errorClass.fullName} handleChange={handleChange}></Input>
            {errors.fullName && <span className='error'>{errors.fullName}</span>}
            
            <Input name='address1' label='Address 1: *' type='text' className={errorClass.address1} handleChange={handleChange}></Input>
            {errors.address1 && <span className='error'>{errors.address1}</span>}
            
            <Input name='address2' label='Address 2:' type='text' className={errorClass.address2} handleChange={handleChange}></Input>
            
            {errors.address2 && <span className='error'>{errors.address2}</span>}
            <div id="cityStateGrid">
                <div id="cityContainer">
                    <Input name='city' label='City: *' type='text' className={errorClass.city} handleChange={handleChange}></Input>
                    {errors.city && <span className='error'>{errors.city}</span>}
                </div>
                <div id="stateContainer">
                    <Select name='state' label='State: *' codes={states} className={errorClass.state} handleChange={handleChange}></Select>
                    {errors.state && <span className='error'>{errors.state}</span>}
                </div>
            </div>
            
            <Input name='zipcode' label='Zipcode: *' type='text' className={errorClass.zipcode} handleChange={handleChange}></Input>
            {errors.zipcode && <span className='error'>{errors.zipcode}</span>}

            <Button name='resetButton' type='button' buttonText='Reset' className={'outline'} onClick={() => setForm(intialFormData)}></Button>

            <Button name='submitButton' type='submit' buttonText='Save'></Button>
        </form>
        {confirmation && <span className="confirm">{confirmation}</span>}
        </>
    )
}