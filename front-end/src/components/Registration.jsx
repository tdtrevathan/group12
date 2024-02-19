import {Button, Input, Radio, Select} from './FormFields';

export default function Registration () {
    return (
        <>
        <form>
            <Input name="firstname" label="First Name:" type="text"></Input>
            <Input name="lastName" label="Last Name:" type="text"></Input>
            <Input name="username" label="Username:" type="text"></Input>
            <Input name="password" label="Password:" type="password"></Input>
        </form>
        {/* TODO */}
        </>
    )
}