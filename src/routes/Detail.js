import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

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
        <div>
            { loading ? <span>...Loading</span> : 
                <div>
                    <h2>{detail.title} Detail</h2>
                    <img alt={detail.title} src={detail.medium_cover_image}/>
                    <h4>description</h4>
                    <p>{detail.description_full}</p>
                </div>
            }
        </div>
    );
}

export default Detail;