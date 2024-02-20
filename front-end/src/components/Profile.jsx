import {Button, Input, Radio, Select} from './FormFields';
import React, { useState } from 'react'
export default function Profile () {

    const states = ['', 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];

    const [errors, setErrors] = useState({})
    const [errorClass, setErrorClass] = useState({})
    const [formData, setFormData] = useState({
        fullName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipcode: ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        errors[name] = '';
        errorClass[name] = '';

        setFormData({
            ...formData, [name] : value
        })
    }

    const handleSubmit = (e) => {
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

        if(formData.address2.length > 100){
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

        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
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

            <Button name='submitButton' type='submit' buttonText='Edit'></Button>
        </form>
        </>
    )
}