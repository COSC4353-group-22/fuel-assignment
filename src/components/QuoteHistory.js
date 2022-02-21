import React from "react";
import './QuoteHistory.css';
import { useEffect, useState } from 'react';

const QuoteHistory = () => {
    //temporary values to populate table for now - will connect in following assignments 
	const [quotes, setQuotes] = useState([
        { date: '2/22/22', gallons: 3, address: '3034 Scenic Elm St', gallonPrice: 1.57, total: 4.71 },
        { date: '4/25/21', gallons: 34, address: '2020 Winding Way', gallonPrice: 2.02, total:  68.68},
        { date: '2/28/20', gallons: 18, address: '9292 Clear Lake City Blvd', gallonPrice: 6.22, total: 111.96 },
        { date: '11/01/21', gallons: 100, address: '8567 Fairmont St', gallonPrice: 1.57, total: 157.0 },
        { date: '08/12/21', gallons: 50, address: '1313 Cornelia St', gallonPrice: 2.50, total: 150.0 }
    ]);


	return (
        <html>
        <head>
            <link rel="stylesheet" href="QuoteHistory.css"></link>
        </head>
        <body>
		<div className="QuoteHistory">
			<div className="content">
            <h2>QUOTE HISTORY</h2>
                <table id = "history">
					<thead className="thead-dark">
                            <tr>
                                <th>DELIVERY DATE</th>
                                <th>GALLONS REQUESTED</th>
                                <th>DELIVERY ADDRESS</th>
                                <th>PRICE PER GALLON</th>
                                <th>TOTAL</th>
                            </tr>
					</thead>
					<tbody>
						{quotes && quotes.map((quote) => (
							<tr>
								<td>{quote.date}</td>
								<td>{quote.gallons}</td>
								<td>{quote.address}</td>
								<td>{quote.gallonPrice}</td>
								<td>{quote.total}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
        </body>
        </html>
	)
}

export default QuoteHistory
