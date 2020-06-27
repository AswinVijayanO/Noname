import React from 'react';

function Card(props) {
    return (
        <div className="CardMain">
        <div className={"card-content "+props.dir}>
        <div className={"card-text "+ ((props.dir === "")? "text-left" :"text-right")}>
                <h1>
                    {props.mainTitle}
                </h1>
                <h3>
                {props.subtitle}
                </h3>
                <p className="trynow">
                    TRY NOW >
                </p>
            </div>
            <div>
                <img src={props.url} alt=""/>
            </div>
        </div>
        </div>
    );
}

export default Card;