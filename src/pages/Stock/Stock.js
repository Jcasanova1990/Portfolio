import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

export default function Price (props) {
  // Grabbing the Stock symbol from the URL Params
  const params = useParams()
  const symbol = params.symbol
  // Using the other two variables to create our URL
  //state to hold the coin data
  const [stock, setStock] = useState(null);

  //function to fetch coin data
  const getCoin = async () => {
    try{
        const response = await fetch(`/api/stocks/${symbol}`);
        const data = await response.json();
        setStock(data);
    }catch(error){
        console.error(error)
    }   
  };

  // useEffect to run getCoin when component mounts
  useEffect(() => {
    console.log('hello')
    getCoin();
  }, []);

  // loaded function for when data is fetched
  const loaded = () => {
    return (
      <div>
        <h1>
          {stock.name}/USD
        </h1>
        <h2>{stock.lastPrice}</h2>
        <h3>Put more data here if you want</h3>
      </div>
    );
  };

  // Function for when data doesn't exist
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // if coin has data, run the loaded function, otherwise, run loading
  return stock ? loaded() : loading();
};