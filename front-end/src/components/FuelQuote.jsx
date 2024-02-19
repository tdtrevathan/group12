import {Button, Input, Radio, Select, Label} from './FormFields';
import React, { useState } from 'react'
export default function FuelQuote () {

    const retrievedAddress = '333 Fake Address Avenue'
    const retrievedRate = 3.55
    const calculatedTotal = 100

    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        gallons: 0,
        address: '',
        date: '',
        rate: '',
        total: 0
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

        if(!formData.gallons){
            validationErrors.gallons = 'required'
        }
        else if(formData.gallons == 0){
            validationErrors.gallons = 'must be non-zero'
        }
        else if(formData.gallons <= 0){
            validationErrors.gallons = 'must be positive'
        }

        if(!formData.date){
            validationErrors.date = 'required'
        }
        setErrors(validationErrors)
        console.log(errors)
        if(Object.keys(validationErrors).length === 0){

        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>

        <Input name='gallons' label='Gallons:' type='number' handleChange={handleChange}></Input>
        {errors.gallons && <span class='error'>{errors.gallons}</span>}

        <Label name='address' label='Address:'></Label>

        <span name='address'>{retrievedAddress}</span>

        <Input name='date' label='Delivery Date:' type='date' handleChange={handleChange}></Input>
        {errors.date && <span class='error'>{errors.date}</span>}

        <Label name='rate' label='Suggested Price / Gallon:'></Label>
        <span name='rate'>{retrievedRate}</span>

        <Button name='submitButton' type='submit' buttonText='Get Quote'></Button>
        
        <Label name='total' label='Ammount Due:'></Label>
        <span>${calculatedTotal}</span>
        </form>
        </>
    )
}