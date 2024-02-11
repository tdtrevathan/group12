import { useState, useEffect } from 'react'

export default function FuelQuote () {

    const [count, setCount] = useState(0);

    //can delete later but I need it for reference
    const [salesData, setSalesData] = useState([]);
  
    useEffect( () => {
      fetch('/api/v1/sales')
        .then(response => response.json())
        .then(data => {
          setSalesData((salesData) => data);
          console.log(data)
          console.log(salesData)
        })
        .catch(e => {
          console.log(e);
        })
   
    },[])

    return (
        <>
        <ul>
            {salesData.map((sale) => (
            <li key={sale.intid}> {sale.item} : {sale.price}</li>
            ))}
        </ul>
        </>
    )
}