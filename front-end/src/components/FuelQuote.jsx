import React, { useEffect, useState } from 'react';
import { useNavigate, useBlocker } from "react-router-dom";
import { Button, Input } from './FormFields';

export default function FuelQuote ( {loggedInUsername, loggedInAddress} ) {
    
    const navigate = useNavigate();

    const [unsubmittedQuote, setUnsubmittedQuote] = useState(false);
    let blocker = useBlocker(unsubmittedQuote);

    useEffect(() => {
        const confirmationMessage = 'Are you sure you want to leave? Your current quote will be discarded.';

        if(blocker.state === "blocked") {

            if(window.confirm(confirmationMessage)) {
                blocker.proceed();
                blocker.reset();
            }
        }

    }, [blocker]);

    const [confirmation, setConfirmation] = useState()
    const [error, setError] = useState(null);
    const [errors, setErrors] = useState({})
    const [errorClass, setErrorClass] = useState({})
    
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

        var tempForm = formData;

        tempForm.rate = '';
        document.getElementById("rate").value = '';
        tempForm.total = '';
        document.getElementById("total").value = '';

        setFormData({
            ...tempForm, [name] : value
        })
        
        setConfirmation('');
    }

    async function fetchQuote() {

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
                setConfirmation('');

                
                var tempForm = formData;

                tempForm.rate = '$' + (Math.round(responseBody.rate * 100) / 100).toFixed(2);
                document.getElementById("rate").value = tempForm.rate;

                tempForm.total = '$' + (Math.round(responseBody.total * 100) / 100).toFixed(2);
                document.getElementById("total").value = tempForm.total;

                setFormData({...tempForm});
                setUnsubmittedQuote(true);


            } catch (error) {
                setError(error.message);
            }

        }
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

            setConfirmation(`Quote for ${formData.gallons} gallons on ${formData.date} with a total of ${formData.total} submited successfully.`);
            
            var tempForm = formData;
            tempForm.rate = '';
            tempForm.total = '';
            setFormData({...tempForm});

            setUnsubmittedQuote(false);
            if(blocker.state === "blocked") {
                blocker.reset();
            }

        } catch (error) {
            setError(error.message);
        }
    }

    function resetForm() {
        
        var temp = {
            username: loggedInUsername,
            address: loggedInAddress,
            gallons: 0,
            date: '',
            rate: '',
            total: ''
        }
        setFormData({...temp});
        setError('');
        setErrors({});
        setErrorClass({});
        document.getElementById("gallons").value = '';
        document.getElementById("date").value = '';
        document.getElementById("rate").value = '';
        document.getElementById("total").value = '';
        setUnsubmittedQuote(false);
        if(blocker.state === "blocked") {
            blocker.reset();
        }
    }

    useEffect(() => {
        if(!loggedInUsername) {
            navigate('/')
        }
        if(blocker.state === "blocked") {
            blocker.reset();
        }
      }, []);

    return (
        <>
        <form id="fuelQuoteForm">

            <Input name='gallons' label='Gallons: *' type='number' className={errorClass.gallons} handleChange={handleChange}></Input>
            {errors.gallons && <span className='error'>{errors.gallons}</span>}

            <Input 
                name="address"
                label="Address:"
                type="text"
                value={loggedInAddress}
                className='readonly'
                readOnly
            ></Input>

            <Input name='date' label='Delivery Date: *' type='date' className={errorClass.date} handleChange={handleChange}></Input>
            {errors.date && <span className='error'>{errors.date}</span>}

            <Input 
                name='rate'
                label='Suggested Price / Gallon:'
                type='text'
                placeholder='$0.00'
                className={'readonly money'}
                handleChange={handleChange}
                readOnly></Input>

            <Input
                name='total'
                label='Total Amount:'
                type='text'
                placeholder='$0.00'
                className={'readonly money'}
                handleChange={handleChange}
                readOnly></Input>

            <Button name='resetButton' type='button' buttonText='Reset' className={'outline'} onClick={resetForm}></Button>

            <Button 
                name='quoteButton'
                type='button'
                buttonText='Get Quote'
                className={!(formData.address && formData.gallons && formData.date) ? 'disabled' : ''}
                onClick={(formData.address && formData.gallons && formData.date) ? fetchQuote : () => {}}
            >
            </Button>

            <Button 
                name='submitButton'
                type='button'
                buttonText='Submit Quote'
                className={formData.total ? 'big' : 'big disabled'}
                onClick={formData.total ? confirmQuote : () => {}}
            >
            </Button>
        
        </form>
        {confirmation && <span className="confirm">{confirmation}</span>}
        {error && <span className="error">{error}</span>}        
        </>
    )
}