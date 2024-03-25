import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Table } from './Table';

export default function QuoteHistory ( {loggedInUsername} ) {
    
    const navigate = useNavigate();

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

    const headers = [
        'Gallons',
        'Address',
        'Date',
        'Rate',
        'Total'
    ]

    useEffect(() => {
        if(!loggedInUsername) {
            navigate('/')
        }
      }, []);

    return (
        <>
        <Table headers={headers} rows={previousQuotes}></Table>
        </>
    )
}