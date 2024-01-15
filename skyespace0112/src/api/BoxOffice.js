import React, { useState, useEffect } from 'react';
import '../api/Api.css';




function BoxOffice() {
    const [boxOffice, setBoxOffice] = useState([]);
    const [thumbnails, setThumbnails] = useState({});
    const [overviews, setOverviews] = useState({});
    const [movieIds, setMovieIds] = useState({});

    useEffect(() => {
        const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=bfb986af81de507e5d650246be5a9473&targetDt=20240111`;
        
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();

                const movieData = data.boxOfficeResult.dailyBoxOfficeList.slice(0,10);
                setBoxOffice(movieData);


                const thumbnails = {};
                const overviews = {};
                const movieIds = {};
                for (const movie of movieData) {
                    const movieInfo = await getMovieInfo(movie.movieNm);
                    thumbnails[movie.movieCd] = movieInfo.thumbnail;
                    overviews[movie.movieCd] = movieInfo.overview;
                    movieIds[movie.movieCd] = movieInfo.id;
                }
                setThumbnails(thumbnails);
                setOverviews(overviews);
                setMovieIds(movieIds)



            } catch (error) {
                console.error("Error fetching data", error);
            }
        };
        fetchData();
    }, [Date]);

        const getMovieInfo = async (movieNm) => {
        const tmdbUrl = `https://api.themoviedb.org/3/search/movie?api_key=404721dd0da3a0237d7d7336dc86821b&query=${movieNm}&language=ko`;
        const response = await fetch(tmdbUrl);
        const data = await response.json();
            const posterPath = data.results[0].poster_path;
            const overview = data.results[0].overview;
            const id = data.results[0].id;
        return {
        thumbnail: `https://image.tmdb.org/t/p/w500${posterPath}`,
            overview: overview,
        id: id 
    };
}

       
    return (
 <div>
            {boxOffice.map((movie) => (
                <div key={movie.movieCd} style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={thumbnails[movie.movieCd]} alt={movie.movieNm} className="thumbnail" />
                    <div className="movieInfo">
                        <p className="rank">BoxOffice: #  <span className="rankNumber">{movie.rank}</span></p>
                        <a href={`https://search.naver.com/search.naver?query=${movie.movieNm}`} target="_blank" rel="noopener noreferrer" className="movieNameLink">
                            <h2 className="movieName">{movie.movieNm && movie.movieNm.length > 22 ? movie.movieNm.slice(0,22)+'...' : movie.movieNm}</h2>
                        </a>
                        <p className="overviews">{overviews[movie.movieCd] && overviews[movie.movieCd].length > 150 ? overviews[movie.movieCd].slice(0, 150) + '...' : overviews[movie.movieCd]}</p>


                    </div>
                </div>
            ))}
        </div>
    );
}

export default BoxOffice;
