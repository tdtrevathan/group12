import {Button, Input, Radio} from './FormFields';

export default function Login () {
    return (
        <form>

            <Input name="username" label="Username:" type="text" />
            <Input name="password" label="Password:" type="text" />

        </form>
    )
}