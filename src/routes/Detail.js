import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import styles from "./Detail.module.css";
import Spinner from "../components/Spinner";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);
    const {id} = useParams()
    const getDetail = async() => {
        const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
        const json = await response.json();
        setDetail(() => json.data.movie);
        setLoading(false);
    }
    useEffect(() => {
        getDetail();
    }, []);
    return (
        <div className={styles.detailContainer}>
            { loading ? <Spinner /> : 
                <div className={styles.detailCard}>
                    <img className={styles.coverImg} alt={detail.title} src={detail.medium_cover_image}/>
                    <div className={styles.info}>
                        <h2 className={styles.title}>{detail.title} Detail</h2>
                        <div>
                            <h4 className={styles.subheading}>description</h4>
                            <p className={styles.description}>{detail.description_full}</p>
                        </div>
                        <div className={styles.bottomContainer}>
                            <div>
                                <h4 className={styles.subheading}>Genres</h4>
                                <span><ul className={styles.genres}>{detail.genres.map(g => <li key={g}>{g}</li>)}</ul></span>
                            </div>
                            <div>
                                <h4 className={styles.subheading}>Running Time</h4>
                                <span className={styles.runtime}>{detail.runtime} min.</span>
                            </div>
                            <div>
                                <h4 className={styles.subheading}>like</h4>
                                <span className={styles.likeCount}>{detail.like_count}</span>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Detail;