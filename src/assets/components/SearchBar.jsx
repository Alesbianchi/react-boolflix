//importo Usestate e Usecontext
import { useState, useContext } from "react";

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

        //chiamata axios all'url
        axios.get(url).then(response => {
            // Creo una nuova lista di film con solo i dati che ci interessano
            const moviesData = response.data.results.map(movie => ({
                id: movie.id,
                title: movie.title,
                originalTitle: movie.original_title,
                language: movie.original_language,
                rating: movie.vote_average,
                poster: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            }));

            // Aggiorno lo stato con la lista di film trovati
            setMovies(moviesData);
        });

    };

    return (
        <div>
            <input
                type="text"
                placeholder="Cerca un film..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={searchMovies}>Cerca</button>
        </div>
    );
};

export default SearchBar;