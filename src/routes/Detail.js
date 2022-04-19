import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"
import styles from "./Detail.module.css";

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
    console.log(detail)
    useEffect(() => {
        getDetail();
    }, []);
    return (
        <div className={styles.detailContainer}>
            { loading ? <span>...Loading</span> : 
                <div className={styles.detailCard}>
                    <img className={styles.coverImg} alt={detail.title} src={detail.medium_cover_image}/>
                    <div className={styles.info}>
                        <h2 className={styles.title}>{detail.title} Detail</h2>
                        <div>
                            <h4 className={styles.descriptionTitle}>description</h4>
                            <p className={styles.description}>{detail.description_full}</p>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Detail;