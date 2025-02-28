import MoviesCard from "./MoviesCard";

const MoviesList = ({ movies }) => {
    return (
        <div>
            {movies.map((movie) => (
                <MoviesCard key={movie.id} movie={movie} />
            ))}
        </div>
    );
};

export default MoviesList;