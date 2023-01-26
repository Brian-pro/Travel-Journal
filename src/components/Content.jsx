export default function Content (props) {
    return (
        <div className="card-container">
            <img src={props.item.imageUrl} alt="location image" className="card-image"/>
            <div className="card-information">
                <div className="location-info">
                    <i className="fa-solid fa-location-dot"></i>
                    <span className="location-country">{props.item.location}</span>
                    <a href={props.item.googleMapsUrl} className="location-link grey" target="_blank">View on Google Maps</a>
                </div>
                <h1 className="location-title">{props.item.title}</h1>
                <span className="bold">{props.item.startDate} - {props.item.endDate}</span>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}