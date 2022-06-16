import "./FavoriteItem.css";

import Card from "../UI/Card";

const FavoriteItem = (props) => {
  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="favorite-item">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </Card>
  );
};

export default FavoriteItem;
