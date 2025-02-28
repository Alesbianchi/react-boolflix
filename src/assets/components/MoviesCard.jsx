const MoviesCard = ({ movie }) => {

    // Costruiamo il percorso della bandiera
    const flagSrc = `/flags/${movie.language}.jpg`;

    return (
        <div className="movie-card">
            <img src={movie.poster} alt={movie.title} />
            <div className="movie-info">
                <h3>{movie.title} {movie.type === "tv" && "(Serie TV)"}</h3>
                <p><strong>Titolo Originale:</strong> {movie.originalTitle}</p>

                <p><strong>Lingua:</strong> <img
                    className="flag-icon"
                    src={flagSrc}
                    onError={(e) => { e.target.src = "/flags/default.jpg"; }}
                    alt={movie.language}
                /></p>
                <p><strong>Voto:</strong> ⭐ {movie.rating}</p>
            </div>
        </div>
    );
};

export default MoviesCard;