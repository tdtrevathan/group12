import '../css/form.css'

export function Label ( {name, label} ) {
    return (
        <>
        <label for={name}>{label}</label>
        </>
    )
}

export function Button ( { buttonText, name, type } ) {
    return (
        <>
        <button name={name} type={type}>{buttonText}</button>
        </>
    )
}

export function Input ( { name, label, type, className, handleChange } ) {

    return (
        <>
        <Label name={name} label={label} />
        <input id={name} name={name} type={type} className={className} onChange={handleChange} />
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