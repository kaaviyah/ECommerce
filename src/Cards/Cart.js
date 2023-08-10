// import React, { useState } from "react";
import './Cards.css'
function Cart({ cartItems, removeFromCart }) {
    return (
        <>
            <div className="product-cards">
                {
                    cartItems.length === 0 ? (
                        <h2>Your Cart is Empty</h2>
                    ) : (

                        <>

                            {
                                cartItems.map(item => (
                                    <div key={item.id
                                    } className="cards">
                                        <h3>{item.title}</h3>
                                        <img src={item.image} alt={item.name} />
                                        <p className="description">{item.description}</p>
                                        <span>$ {item.price}</span>
                                        <button className="cart-button" onClick={() => removeFromCart(item)}>
                                            Remove
                                        </button>
                                    </div>
                                ))

                            }
                        </>

                    )

                }

            </div>

        </>

    )

};
export default Cart;