import {Button, Input, Radio, Select} from './FormFields';

export default function FuelQuote () {

    return (
        <>
        <Input name='gallons' label='Gallons:' type='number'></Input>
        <p>Retrieved Address</p>
        <Input name='date' label='Delivery Date:' type='date'></Input>
        <p>Suggested Price / Gallon</p>
        <p>Total Ammount Due</p>
        </>
    )
}