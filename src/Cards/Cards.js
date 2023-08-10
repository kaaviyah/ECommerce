import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cards.css";


const Cards = ({ handleCart }) => {
  const [products, setProducts] = useState([]);

  const handleAddToCart = (product) => {
    const isAlreadyInCart = products.some(p => p.id === product.id && p.addedToCart);
    if (!isAlreadyInCart) {
      const updatedProducts = products.map(p => p.id === product.id ? { ...p, addedToCart: true } : p);
      setProducts(updatedProducts);
      handleCart(product);
    }
  };
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

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
