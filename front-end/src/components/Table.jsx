import '../css/form.css'

export function Table ({headers, rows}){
    console.log(headers);
    return (
        <>
        <table style={{color: "black"}}>
            <thead>
                <tr>
                    { headers.map((item)=><th>{item}</th>) }
                </tr>
            </thead>
            <tbody>
            {
                rows.map((item,i)=>{
                    return <tr key={i}>
                        <td>{item.gallons}</td>
                        <td>{item.address}</td>
                        <td>{item.date}</td>
                        <td>{item.retrievedRate}</td>
                        <td>{item.calculatedTotal}</td>
                    </tr>
                })
            }
            </tbody>
        </table>
        </>
    )
}