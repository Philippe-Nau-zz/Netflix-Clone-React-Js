import React from "react";
import "./Header.css"

const Header = ({isBlack}) => {
    return (
        <header className={isBlack ? "black" : ""}>
            <div className="header--logo">
                <a href="/">REACTFLIX</a>
            </div>
            <div className="header--user">
                <img alt="user" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw9cnEvZ98kadKb7ZIhW20sXOTNVlEsH1q4Q&usqp=CAU"/>
            </div>
        </header>
    )
}

export default Header;