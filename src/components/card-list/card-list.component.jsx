import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";
//import Card from "../card/card.component";

export const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

//******    íGY IS LEHET  ******** */

// function CardList(props) {
//   return (
//     <div className="card-list">
//       {props.monsters.map((monster) => (
//         <Card key={monster.id} monster={monster} />
//       ))}
//     </div>
//   );
// }

// export default CardList;
