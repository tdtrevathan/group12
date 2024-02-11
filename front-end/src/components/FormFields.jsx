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
        {/* TODO */}
        </>
    )
}

export function Input ( { name, label, type } ) {

    function testFunction() {
        return {name}
    }

    return (
        <>
        <Label name={testFunction()} label={label} />
        <input id={name} name={name} type={type} />
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