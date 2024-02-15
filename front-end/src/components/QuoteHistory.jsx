export default function QuoteHistory () { /* TODO Create component for table?*/

    const previousQuotes = [
        {
            gallons: 1,
            address: '333 Fake Address Avenue',
            date: '01-05-2020',
            retrievedRate: 3.55,
            calculatedTotal: 100,
        },
        {
            gallons: 5,
            address: '1234 Not Real Blvd',
            date: '11-23-1965',
            retrievedRate: 0.55,
            calculatedTotal: 250,
        },
        {
            gallons: 2,
            address: '88 Main Street',
            date: '04-12-2001',
            retrievedRate: 2.00,
            calculatedTotal: 4.00,
        },
    ]

    return (
        <>
        <table style={{color: "white"}}>
            <thead>
                <tr>
                    <th>Gallons</th>
                    <th>Address</th>
                    <th>Date</th>
                    <th>Rate</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
            {
                previousQuotes.map((item,i)=>{
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