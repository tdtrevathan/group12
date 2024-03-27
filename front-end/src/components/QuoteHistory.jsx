import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Table } from './Table';

export default function QuoteHistory ( {loggedInUsername} ) {
    
    const navigate = useNavigate();

    const [quoteHistory, setQuoteHistory] = useState([]);

    const headers = [
        'Gallons',
        'Address',
        'Date',
        'Rate',
        'Total'
    ]

    async function getQuoteHistory() {

        await fetch(`/api/fuelQuote/${loggedInUsername}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(response => {
            return response.json()
        })
        .then(data => {
           console.log(data) 
           var quotes = [];
           for(var i = 0; i < data.length; i++) {
            console.log(data[i]);
            quotes.push(data[i]);
           }
           console.log(quotes)
           setQuoteHistory(quotes);
        });

    }

    useEffect(() => {
        if(!loggedInUsername) {
            navigate('/')
        }
        getQuoteHistory();
      }, []);

    return (
        <>
        <Table headers={headers} rows={quoteHistory}></Table>
        </>
    )
}