//importo fontawensome 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fullStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";


const MoviesCard = ({ movie }) => {

    // Converto il voto da 1-10 a 1-5 e arrotondo per eccesso
    const rating = Math.ceil(movie.rating / 2);

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
                {/* <p><strong>Voto:</strong> ⭐ {movie.rating}</p> */}
                <div className="movie-rating">
                    {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon
                            key={i}
                            icon={i < rating ? fullStar : emptyStar}
                            className="star-icon"
                        />
                    ))}
                </div>
            </div>

        </div>
    );
};

export default MoviesCard;