function Label ( {name, label} ) {
    return (
        <>
        <label for={name}>{label}</label>{/* TODO classname and styling*/}
        </>
    )
}

export function Button ( { buttonText } ) {
    return (
        <>
        <button>{buttonText}</button> {/* TODO  Is this the button we want? or input*/}
        </>
    )
}

export function Input ( { name, label, type } ) {

    return (
        <>
        <Label name={name} label={label} />
        <input id={name} name={name} type={type} />
        </>
    )
}

export function Select ( {label, name, codes} ){
    
    var MakeItem = function(param) {
        return <option>{param}</option>;
    }
    
    return ( 
        <>
            <Label name={name} label={label} />
            <select>{codes.map(MakeItem)}</select> 
        </>
    )
}

export function Radio ( {label, } ) {
    return (
        <>
        {/* TODO */}
        </>
    )
}