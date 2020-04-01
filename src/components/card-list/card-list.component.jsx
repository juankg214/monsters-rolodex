import React from "react";
import { Card } from "../card/card.component"
import "./card-list.styles.css";

export const CardList = (props) => {
    console.log(props)
    return <div className="card-list">
        {
    
            props.monsters.map((monster) =>
                
           typeof props.search == "undefined" ? <Card key={monster.id} monster={monster} /> :  monster.name.toLowerCase().includes(props.search.toLowerCase()) ? <Card key={monster.id} monster={monster} /> : null
         
        )

        }
    </div>

}