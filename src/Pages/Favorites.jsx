import React from "react";

import "./Products.css";
import { useStore } from "../hooks-store/store";
import FavoriteItem from "../components/Favorites/FavoriteItem";

const Favorites = (props) => {
  const state = useStore()[0];

  const favProducts = state.products.filter((p) => p.isFavorite);
  console.log(favProducts);

  let content = <p className="placeholder">No Favorites Yet!!!</p>;

  if (favProducts.length > 0) {
    content = (
      <ul className="products-list">
        {favProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
            isFav={prod.isFav}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
