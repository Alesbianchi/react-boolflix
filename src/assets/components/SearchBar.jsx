//importo Usestate e Usecontext
import { useState } from "react";

//importo  axios
import axios from "axios";

//salvo la mia api key in una costante
const API_KEY = "94ab4a9286f23d4c4b0f807a9375ba3d";




const SearchBar = ({ setMovies }) => {
    //salvo e aggiorno l'input inserito dell'utente
    const [query, setQuery] = useState("");

    const searchMovies = () => {
        // Se l'utente non scrive nulla, non facciamo la richiesta
        if (!query) return;

        //salvo l'url composto dalla mia key + l'input scritto dall'utente
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;

        //salvo l'url composto dalla mia key + l'input scritto dall'utente per la chiamata alle serie tv
        const tvUrl = `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=it_IT&query=${query}`;


        //chiamata axios all'url movie
        axios.get(url).then(movieRes => {
            // Creo una nuova lista di film con solo i dati che ci interessano
            const moviesData = movieRes.data.results.map(movie => ({
                id: movie.id,
                title: movie.title,
                originalTitle: movie.original_title,
                language: movie.original_language,
                rating: movie.vote_average,
                poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                type: "movie"
            }));

            //chiamata axios all'url serie tv
            axios.get(tvUrl).then(tvRes => {

                const tvData = tvRes.data.results.map(tv => ({
                    id: tv.id,
                    title: tv.name,
                    originalTitle: tv.original_name,
                    language: tv.original_language,
                    rating: tv.vote_average,
                    poster: `https://image.tmdb.org/t/p/w500${tv.poster_path}`,
                    type: "tv"
                }));

                // Aggiorno lo stato con la lista di film trovati e delle serie tv
                setMovies([...moviesData, ...tvData]);
            });
        });

    };

    return (
        <div>
            <input
                type="text"
                placeholder="Cerca un film o una serie TV..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={searchMovies}>Cerca</button>
        </div>
    );
};

export default SearchBar;