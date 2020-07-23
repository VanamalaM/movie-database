import React, { useState } from 'react'
import { moviesData } from './../../jsonData'
import MovieList from './../movieListComponent/movieList'
import MovieDetailPage from './../movieDetailsComponent/movieDetails'

const LandingPage = () => {
    const [flag, setFlag] = useState(null);
    const [movieDetails, setMovieDetail] = useState(null)

    const detailsPageFlag = (check, data) =>{
        console.log(check)
        setFlag(check)
        setMovieDetail(data)
    }
    return(
        <div>
            {!flag &&
                <MovieList 
                    moviesData={moviesData}
                    detailsPageFlag={detailsPageFlag}/>}
                    
            {flag && <MovieDetailPage movieDetails={movieDetails}/>}
            
        </div>
    )
}
export default LandingPage;
