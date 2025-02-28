const MoviesCard = ({ movie }) => {
    return (
        <div>
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p><strong>Titolo Originale:</strong> {movie.originalTitle}</p>
            <p><strong>Lingua:</strong> {movie.language.toUpperCase()}</p>
            <p><strong>Voto:</strong> ⭐ {movie.rating}</p>
        </div>
    );
};

export default MoviesCard;