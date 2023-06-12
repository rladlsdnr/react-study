import { useState, useEffect } from "react";

function App(){
    const [load, setL] = useState(true)
    const [coins, setC] = useState([])
    const [money, setM] = useState()
    const [val, setV] = useState()
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then(response => response.json())
        .then(json => {
            setC(json)
            setL(false)
        })
    }, [])

    const wrtM = (event) => setM(event.target.value)
    const selC = (event) => setV(event.target.value)

    return (
    <div>
        <h1>The Coins! {load ? null : `(${coins.length})`}</h1>
        <div><input type="number" value={money} onChange={wrtM} placeholder="Write your money on USD"></input></div>
        {load ? <strong>Loading...</strong> : 
        <select onChange={selC}>
            {coins.map((coin) => <option value={coin.quotes.USD.price}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price}</option>)}
        </select>}
        <div><h2>{val > 0 ? `You can buy ${val/money}` : null}</h2></div>
    </div>
    )
}

export default App;