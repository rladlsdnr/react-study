import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


function Detail() {
    const [load, setL] = useState(true)
    const [movie, setM] = useState([])
    const {id} = useParams()
    const getM = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
            setM(json.data)
            setL(false)
    }
    useEffect(() => {
        getM()
    }, [])
    return <div>
        {load ? <h1>Loading...</h1> : JSON.stringify(movie)}
        </div>
}

export default Detail;