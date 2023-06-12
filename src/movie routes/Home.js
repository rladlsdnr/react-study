import { useState, useEffect } from "react";
import Movie from "../movie components/Movie"

function Home(){
    const [load, setL] = useState(true)
    const [movie, setM] = useState([])
    const getM = async() => {
        const json = await (
            await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)).json()
        setM(json.data.movies)
        setL(false)
    }
    useEffect(() => {
        getM()
    }, [])
    return <div>
        {load ? <h1>Loading...</h1> : 
        movie.map((movie) => (
            <Movie 
            key={movie.id}
            id={movie.id}
            covImg={movie.medium_cover_image} 
            title={movie.title} 
            summary={movie.summary} 
            genres={movie.genres} />
        ))
            }
            </div>
}

export default Home;