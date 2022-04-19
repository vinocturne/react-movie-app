import {Link} from 'react-router-dom';
import styles from './Movie.module.css';

function Movie({ id, coverImg, title, summary, genres, year, rating }) {
    return (
        <div className={styles.card}>
            <div className={styles.imgBox}>
                <Link to={`/movie/${id}`}><img className={styles.coverImg} alt={title} src={coverImg} /></Link>
                <div className={styles.rating}><span className={styles.strong}>{rating}</span>/10</div>
            </div>
            <div className={styles.info}>
                <div>
                    {/* <Link to="/movie">{title}</Link> */}
                    <Link to={`/movie/${id}`} className={styles.title}>{title}</Link>
                    <p className={styles.year}>{year}</p>
                </div>

                <p className={styles.summary}>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p>
                <ul className={styles.genres}>
                    {genres.map(g => <li key={g}>{g}</li>)}
                </ul>
            </div>
        </div>
    );
}
export default Movie;