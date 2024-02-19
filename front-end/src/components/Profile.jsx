import {Button, Input, Radio, Select} from './FormFields';

export default function Profile () {

    const states = ['Tx','Al','Ak'];
    return (
        <>
        <form>
            <Input name='fullName' label='Full Name:' type='text'></Input>
            <Input name='address' label='Address 1:' type='text'></Input>
            <Input name='address' label='Address 2:' type='text'></Input>
            <Input name='city' label='City:' type='text'></Input>
            <Select name='state' label='State:' codes={states}></Select>
            <Input name='zipcode' label='Zipcode:' type='text'></Input>
        </form>
        </>
    )
}