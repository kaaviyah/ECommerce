import React from "react";
import "./Cards.css";
const Cards = ({ products, handleAddToCart, handleCart, removeFromCart, cartItems }) => {
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

            {
              pro.inCart ? (
                <button onClick={() => handleCart(pro)} disabled>Added to Cart</button>
              ) : (
                <button onClick={() => handleCart(pro)}>Add to Cart</button>
              )
            }
          </div>
        ))}
      </div>

    </div>
  );
};
export default Cards;
