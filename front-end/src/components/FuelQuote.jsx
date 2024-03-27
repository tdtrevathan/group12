import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Input, Label } from './FormFields';

export default function FuelQuote ( {loggedInUsername, loggedInAddress} ) {
    
    const navigate = useNavigate();

    const [confirmation, setConfirmation] = useState()
    const [error, setError] = useState(null);
    const [errors, setErrors] = useState({})
    const [errorClass, setErrorClass] = useState({})
    const [rate, setRate] = useState(0);
    const [totalPrice, settotalPrice] = useState(0);
    const [formData, setFormData] = useState({
        username: loggedInUsername,
        address: loggedInAddress,
        gallons: 0,
        date: '',
        rate: '',
        total: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target

        errors[name] = '';
        errorClass[name] = '';

        setFormData({
            ...formData, [name] : value
        })
        setRate(0);
        settotalPrice(0);
        setConfirmation('');
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const validationErrors = {}
        const validationErrorClass = {}

        if(!formData.gallons){
            validationErrors.gallons = 'ERROR: required'
            validationErrorClass.gallons = 'error';
        }
        else if(formData.gallons == 0){
            validationErrors.gallons = 'ERROR: must be non-zero'
            validationErrorClass.gallons = 'error';
        }
        else if(formData.gallons <= 0){
            validationErrors.gallons = 'ERROR: must be positive'
            validationErrorClass.gallons = 'error';
        }

        if(!formData.date){
            validationErrors.date = 'ERROR: required'
            validationErrorClass.date = 'error';
        }
        setErrors(validationErrors);
        setErrorClass(validationErrorClass);

        if(Object.keys(validationErrors).length === 0){
            
            try {
                const responseBody = await fetch('/api/fuelQuote/getQuote', {
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
                setError('');
                setRate((Math.round(responseBody.rate * 100) / 100).toFixed(2));
                settotalPrice((Math.round(responseBody.total * 100) / 100).toFixed(2));
                setConfirmation('');
                
                var tempForm = formData;
                tempForm.rate = responseBody.rate.toString();;
                console.log(responseBody.total)
                tempForm.total = responseBody.total.toString();;
                console.log(tempForm)
                setFormData(tempForm);

            } catch (error) {
                setError(error.message);
            }

        }
    }

    function resetForm() {
        setRate(0)
        settotalPrice(0);
        var temp = {
            username: loggedInUsername,
            address: loggedInAddress,
            gallons: 0,
            date: '',
            rate: '',
            total: ''
        }
        setFormData(temp);
        setError('');
        setErrors({});
        setErrorClass({});
        document.getElementById("gallons").value = '';
        document.getElementById("date").value = '';
    }

    async function confirmQuote() {
        console.log(formData);
        try {
            const response = await fetch('/api/fuelQuote/submitQuote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if(!response.ok) {
                throw new Error('Failed to submit quote');
            }

            setConfirmation(`Quote for ${formData.gallons} gallons on ${formData.date} with a total of $${formData.total} submited successfully.`);
            // resetForm();

        } catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        if(!loggedInUsername) {
            navigate('/')
        }
      }, []);

    return (
        <>
        <form id="fuelQuoteForm" onSubmit={handleSubmit}>

            <Input name='gallons' label='Gallons: *' type='number' className={errorClass.gallons} handleChange={handleChange}></Input>
            {errors.gallons && <span class='error'>{errors.gallons}</span>}

            <Label name='address' label='Address:'></Label>
            <span className="filledData" name='address'>{loggedInAddress}</span>

            <Input name='date' label='Delivery Date: *' type='date' className={errorClass.date} handleChange={handleChange}></Input>
            {errors.date && <span class='error'>{errors.date}</span>}

            {rate ?
                <>
                <Label name='rate' label='Suggested Price / Gallon:'></Label>
                <span className="filledData" name='rate'>${rate}</span>
                </>
            :
            ''
            }

            
            {totalPrice ? 
            <>
            <Label name='total' label='Ammount Due:'></Label>
            <span className="filledData">${totalPrice}</span>
            </> 
            :
            ''
            }

            <Button name='submitButton' type='button' buttonText='Reset' className={'outline'} onClick={resetForm}></Button>
            
            {totalPrice ? 
            <Button name='submitButton' type='button' buttonText='Confirm' onClick={confirmQuote}></Button>
            :
            <Button name='submitButton' type='submit' buttonText='Get Quote'></Button>
            }
        
        </form>
        {confirmation && <span className="confirm">{confirmation}</span>}
        {error && <span className="error">{error}</span>}
        </>
    )
}