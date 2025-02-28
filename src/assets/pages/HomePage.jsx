import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MoviesList from "../components/MoviesList";

const HomePage = () => {
    const [movies, setMovies] = useState([]); // Stato per memorizzare i film cercati

    return (
        <div>
            <h1>React Boolflix</h1>
            <SearchBar setMovies={setMovies} />
            <MoviesList movies={movies} />
        </div>
    );
};

export default HomePage;