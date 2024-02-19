import {Button, Input, Radio, Select} from './FormFields';
import React, { useState } from 'react'
export default function Profile () {

    const states = ['','Tx','Al','Ak'];

    const [errors, setErrors] = useState({})
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

        setFormData({
            ...formData, [name] : value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const validationErrors = {}

        if(!formData.fullName){
            validationErrors.fullName = 'required'
        }
        else if(formData.fullName.length > 50){
            validationErrors.fullName = 'length exceeded'
        }
        
        if(!formData.address1){
            validationErrors.address1 = 'required'
        }
        else if(formData.address1.length > 100){
            validationErrors.address1 = 'length exceeded'
        }

        if(!formData.address2){
            validationErrors.address2 = 'required'
        }
        else if(formData.address2.length > 100){
            validationErrors.address2 = 'length exceeded'
        }

        if(!formData.city){
            validationErrors.city = 'required'
        }
        else if(formData.city.length > 100){
            validationErrors.city = 'length exceeded'
        }

        if(!formData.state){
            validationErrors.state = 'required'
        }

        if(!formData.zipcode){
            validationErrors.zipcode = 'required'
        }
        else if(formData.zipcode.length > 9){
            validationErrors.zipcode = 'length exceeded'
        }
        else if(formData.zipcode.length < 5){
            validationErrors.zipcode = 'invalid zipcode'
        }
        else if(/[a-zA-Z]/g.test(formData.zipcode)){
            validationErrors.zipcode = 'invalid zipcode'
        }

        setErrors(validationErrors)
        
        if(Object.keys(validationErrors).length === 0){

        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <Input name='fullName' label='Full Name:' type='text' handleChange={handleChange}></Input>
            {errors.fullName && <span class='error'>{errors.fullName}</span>}
            <Input name='address1' label='Address 1:' type='text' handleChange={handleChange}></Input>
            {errors.address1 && <span class='error'>{errors.address1}</span>}
            <Input name='address2' label='Address 2:' type='text' handleChange={handleChange}></Input>
            {errors.address2 && <span class='error'>{errors.address2}</span>}
            <Input name='city' label='City:' type='text' handleChange={handleChange}></Input>
            {errors.city && <span class='error'>{errors.city}</span>}
            <Select name='state' label='State:' codes={states} handleChange={handleChange}></Select>
            {errors.state && <span class='error'>{errors.state}</span>}
            <Input name='zipcode' label='Zipcode:' type='text' handleChange={handleChange}></Input>
            {errors.zipcode && <span class='error'>{errors.zipcode}</span>}

            <Button name='submitButton' type='submit' buttonText='Edit'></Button>
        </form>
        </>
    )
}