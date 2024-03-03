import { Link } from "react-router-dom";
import {useState, useEffect} from 'react'

export default function Currencies (props) {
  const [stocks, setStocks] = useState([])

  const getStocks = async () => {
    try {
        const response = await fetch('/api/stocks')
        const stockData = await response.json()
        setStocks(stockData)
    } catch (error) {
        console.error(error)
    }
  }

  useEffect(() => {
    getStocks()
  }, [])

  return (
    <div className="currencies">
      {stocks.map((coin) => {
        const { name, symbol } = coin;

        return (
          <Link to={`/stock/${symbol}`}>
            <h2>{name}</h2>
          </Link>
        );
      })}
    </div>
  );
};