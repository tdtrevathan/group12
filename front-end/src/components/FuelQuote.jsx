import {Button, Input, Radio, Select, Label} from './FormFields';

export default function FuelQuote () {

    const retrievedAddress = '333 Fake Address Avenue'
    const retrievedRate = 3.55
    const calculatedTotal = 100



    return (
        <>
        <form>
        <Input name='gallons' label='Gallons:' type='number'></Input>

        <Label name='address' label='Address:'></Label>
        <span name='address'>{retrievedAddress}</span>

        <Input name='date' label='Delivery Date:' type='date'></Input>

        <Label name='rate' label='Suggested Price / Gallon:'></Label>
        <span name='rate'>{retrievedRate}</span>

        <Button name='submitButton' type='submit' buttonText='Get Quote'></Button>
        
        <Label name='dues' label='Ammount Due:'></Label>
        <span>${calculatedTotal}</span>
        </form>

        </>
    )
}