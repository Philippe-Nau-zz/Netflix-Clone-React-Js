import React, { useState } from "react";
import { IMG_ROW } from "../../utils/network_address";
import "./MovieRow.css"
import { NavigateBefore, NavigateNext } from "@material-ui/icons";

const MovieRow = ({title, items}) => {
    const [scrollX, setScrollx] = useState(0);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0){
            x = 0;
        }
        setScrollx(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }
        setScrollx(x)
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBefore style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNext style={{fontSize: 50}}/>
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                        marginLeft: scrollX,
                        width: items.results.length * 150
                    }}>
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
