import '../css/table.css'

export function Table ({headers, rows}){
    
    return (
        <>
        <table>
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
                        <td>{item.rate}</td>
                        <td>{item.total}</td>
                    </tr>
                })
            }
            </tbody>
        </table>
        </>
    )
}