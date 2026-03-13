import "./News.css";
function News(props) {
    return (
        <div className="news-card-container">
            <div className="news-card">

                <div className="news-text">
                    <p className="news-title">
                        {props.f1NewsTitle}
                    </p>

                    <p className="news-description">
                        {props.f1NewsDescription}
                    </p>
                </div>

                <div className="news-image-wrapper">
                    <img
                        className="news-image"
                        src={props.f1NewsImage}
                        alt={props.f1NewsTitle}
                    />
                </div>
            </div>
        </div>
    )
}

export default News