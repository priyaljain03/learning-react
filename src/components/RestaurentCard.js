import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
    const { resList } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla } = resList

    return <div className="res-card">
        <img
            className="res-logo"
            alt="res-img"
            src={`${CDN_URL}${cloudinaryImageId}`} />
        <div className="res-info">
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating}</h5>
            <h5>{costForTwo}</h5>
            <h5>{sla?.deliveryTime} mins</h5>
        </div>
    </div>
}

export default RestaurentCard;