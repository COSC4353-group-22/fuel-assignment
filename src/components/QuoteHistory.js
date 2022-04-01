import React from "react";
import './QuoteHistory.css';
import axios from "axios";
import { useEffect, useState } from 'react';

const QuoteHistory = () => { 
	const [quotes, setQuotes] = useState([]);

    const fetchTable = async () => {
        await axios.get(`http://localhost:9000/history`).then((res) => {
          setQuotes(res.data);
          console.log(res.data);
        }).catch((err) => {
          console.log(err);
        });
    }
    fetchTable();

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
								<td>{quote.gallonprice}</td>
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