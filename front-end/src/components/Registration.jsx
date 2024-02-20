import {Button, Input, Radio, Select} from './FormFields';

export default function Registration () {
    const [formInput,setFormInput]=useState({
        firstName:"",
        lastName:"",
        username:"",
        password:"",
        checkPassword:"",
    });
    const [formError,setFormError]=useState({
        firstName:"",
        lastName:"",
        username:"",
        password:"",
        checkPassword:""
    });
    const handleUserInput=(name,value)=>{
        setFormInput({
            ...formInput,
            [name]:value,
        });
    };
    const validateFormInput=(event)=>{
        event.preventDefault();
        let inputError={
            firstName:"",
            lastName:"",
            username:"",
            password:"",
            checkPassword:""
        };
        if(!formInput.firstName && !formInput.lastName && !formInput.username && !formInput.password){
            setFormError({
                ...inputError,
                firstName:"Please enter your first name",
                lastName:"Please enter your last name",
                username:"Please enter a username",
                password:"Please enter a password"
            });
            return;
        }
        if(!formInput.firstName){
            setFormError({
                ...inputError,
                firstName:"Please enter your first name"
            });
            return;
        }
        if(!formInput.lastName){
            setFormError({
                ...inputError,
                firstName:"Please enter your last name"
            });
            return;
        }
        if(!formInput.username){
            setFormError({
                ...inputError,
                firstName:"Please enter your username"
            });
            return;
        }
        if(!formInput.password){
            setFormError({
                ...inputError,
                firstName:"Please enter your password"
            });
            return;
        }
        if(formInput.checkPassword !== formInput.password){
            setFormError({
                ...inputError,
                checkPassword:"Passwords do not match"
            });
            return;
        }
        setFormError(inputError);
        setFormInput((prevState) =>({
            ...prevState,
            successMsg: "Validation Success",
        }));
    };
    return (
        <form>
            <Input name="firstName" label="First Name:" type="text" value={formInput.firstName} onChange={({target})=>{handleUserInput(target.name,target.value)}}></Input>
            <p className="error-message">{formError.firstName}</p>
            <Input name="lastName" label="Last Name:" type="text" value={formInput.lastName} onChange={({target})=>{handleUserInput(target.name,target.value)}}></Input>
            <p className="error-message">{formError.lastName}</p>
            <Input name="username" label="Username:" type="text" value={formInput.username} onChange={({target})=>{handleUserInput(target.name,target.value)}}></Input>
            <p className="error-message">{formError.username}</p>
            <Input name="password" label="Password:" type="password" value={formInput.password} onChange={({target})=>{handleUserInput(target.name,target.value)}}></Input>
            <p className="error-message">{formError.password}</p>
            <Input name="checkPassword" label="Confirm Password: " type="password" value={formInput.checkPassword} onChange={({target})=>{handleUserInput(target.name,target.value)}}></Input>
            <p className="error-message">{formError.checkPassword}</p>
            <p className="success-message">{formInput.successMsg}</p>
            <button name="submitbtn" type="submit"></button>
        </form>
    );
};