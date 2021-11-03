import React from "react";
import { IMG_ROW } from "../../utils/network_address";
import "./MovieRow.css"

const MovieRow = ({ title, items }) => {
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                    {
                        items.results.length > 0 && items.results.map((item, key) =>
                        (
                            <div className="movieRow--item" key={key}>
                                <img alt={item.original_title} src={`${IMG_ROW}${item.poster_path}`} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieRow;
