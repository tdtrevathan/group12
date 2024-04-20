import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, Input, Label } from './FormFields';

export default function FuelQuote ( {loggedInUsername, loggedInAddress} ) {
    
    const navigate = useNavigate();

    useEffect(() => {
        const confirmationMessage = 'Are you sure you want to leave? Your current quote will be discarded.';

        const handleBeforeUnload = (e) => {
            e.preventDefault();
            e.returnValue = confirmationMessage;
            return confirmationMessage;
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

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
                // setRate((Math.round(responseBody.rate * 100) / 100).toFixed(2));
                // settotalPrice((Math.round(responseBody.total * 100) / 100).toFixed(2));
                setConfirmation('');

                
                var tempForm = formData;

                tempForm.rate = '$' + (Math.round(responseBody.rate * 100) / 100).toFixed(2);
                document.getElementById("rate").value = tempForm.rate;

                tempForm.total = '$' + (Math.round(responseBody.total * 100) / 100).toFixed(2);
                document.getElementById("total").value = tempForm.total;

                setFormData({...tempForm});


            } catch (error) {
                setError(error.message);
            }

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
            
            var tempForm = formData;
            tempForm.rate = '';
            tempForm.total = '';
            setFormData({...tempForm});

        } catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        if(!loggedInUsername) {
            navigate('/')
        }
        console.log(loggedInAddress);
      }, []);

    return (
        <>
        <form id="fuelQuoteForm" onSubmit={handleSubmit}>

            <Input name='gallons' label='Gallons: *' type='number' className={errorClass.gallons} handleChange={handleChange}></Input>
            {errors.gallons && <span class='error'>{errors.gallons}</span>}

            {/* <Label name='address' label='Address:'></Label>
            <span className="filledData" name='address'>{loggedInAddress}</span> */}
            <Input 
                name="address"
                label="Address:"
                type="text"
                value={loggedInAddress}
                className='readonly'
                readOnly='true'
            >
            </Input>

            <Input name='date' label='Delivery Date: *' type='date' className={errorClass.date} handleChange={handleChange}></Input>
            {errors.date && <span class='error'>{errors.date}</span>}

            <Input 
                name='rate'
                label='Suggested Price / Gallon:'
                type='text'
                placeholder='$0.00'
                className={'readonly money'}
                handleChange={handleChange}
                readOnly={'true'}></Input>

            <Input
                name='total'
                label='Total Amount:'
                type='text'
                placeholder='$0.00'
                className={'readonly money'}
                handleChange={handleChange}
                readOnly={'true'}></Input>

            <Button name='submitButton' type='button' buttonText='Reset' className={'outline'} onClick={resetForm}></Button>

            <Button 
                name='submitButton'
                type={!(formData.address && formData.gallons && formData.date) ? 'button' : 'submit'}
                buttonText='Get Quote'
                className={!(formData.address && formData.gallons && formData.date) ? 'disabled' : ''}
            >
            </Button>

            <Button 
                name='submitButton'
                type='button'
                buttonText='Submit Quote'
                className={formData.total ? 'big' : 'big disabled'}
                onClick={formData.total ? confirmQuote : ''}
            >
            </Button>
        
        </form>
        {confirmation && <span className="confirm">{confirmation}</span>}
        {error && <span className="error">{error}</span>}
        </>
    )
}