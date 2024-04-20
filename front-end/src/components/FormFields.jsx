import '../css/form.css'

export function Label ( {name, label} ) {
    return (
        <>
        <label htmlFor={name}>{label}</label>
        </>
    )
}

export function Button ( { buttonText, name, type, className, onClick } ) {
    return (
        <>
        <button className={className} name={name} type={type} onClick={onClick}>{buttonText}</button>
        </>
    )
}

export function Input ( { name, label, type, value, placeholder, className, handleChange, readOnly} ) {

    return (
        <>
        <Label name={name} label={label} />
        <input id={name} name={name} type={type} value={value} placeholder={placeholder} className={className} onChange={handleChange} readOnly={readOnly}/>
        </>
    )
}

export function Select ( {label, name, codes, className, handleChange} ){
    
    var MakeItem = function(param, i) {
        return <option value={param} key={param}>{param}</option>;
    }
    
    return ( 
        <>
        <Label name={name} label={label} />
        <select id={name} name={name} className={className} onChange={handleChange}>{codes.map(MakeItem)}</select> 
        </>
    )
}

export function Radio ( {label, name, value} ) {
    return (
        <>
        <input value={value} name={name} type='radio'></input>
        <Label label={label}></Label>
        </>
    )
}