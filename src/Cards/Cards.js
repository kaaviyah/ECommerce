import React from "react";
import "./Cards.css";
const Cards = ({ products, handleAddToCart }) => {
  return (
    <div>

      <div className="product-cards">
        {products.map((pro) => (
          <div
            key={pro.id}
            className="cards"
          // onClick={() => handleClick(pro.id)}
          >
            <h3>{pro.title}</h3>
            <img src={pro.image} alt={pro.name} />

            <p className="description">{pro.description}</p>
            <span>$ {pro.price}</span>
            <button className="cart-button" onClick={() => handleAddToCart(pro)}
              disabled={pro.addedToCart}
            >
              {
                pro.addedToCart ? "Added to Cart" : "Add to Cart"
              }

            </button>
          </div>
        ))}
      </div>

    </div>
  );
};
export default Cards;
