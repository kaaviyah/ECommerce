import React from "react";
import { useState } from "react";

import Cards from "./Cards";
import Cart from "./Cart";
function ParentCard() {
    const [cartItems, setCartItems] = useState([]);
    const [showProductDetails, setShowProductDetails] = useState(false);
    // const [products, setProducts] = useState([]);


    const handleProductButtonClick = () => {
        setShowProductDetails(true);
    }
    const handleCartButtonClick = () => {
        setShowProductDetails(false);
    }
    // const handleClick = (productNo) => {
    //     console.log(`clicked card with Id :${productNo}`);
    // };

    const handleCart = (product) => {
        // console.log(`Added ${pro.title} to the cart!`);

        const itemExists = cartItems.some(item => item.id === product.id);
        if (!itemExists) {
            setCartItems([...cartItems, product]);
        }

    };
    console.log(cartItems);
    const removeFromCart = (product) => {
        const updatedCart = cartItems.filter(item => item.id !== product.id);
        setCartItems(updatedCart);
    }

    return (
        <div>
            <>
                <nav className="navbar">
                    <h1 className="text">MegaMart</h1>

                    <div className="container">
                        <button className="btn1" onClick={handleProductButtonClick}><h1>Products</h1></button>
                        <button className="btn2" onClick={handleCartButtonClick}><h1>Cart</h1></button>
                    </div>

                </nav>

                {
                    showProductDetails ?

                        <Cards

                            handleCart={handleCart}
                        /> :
                        <Cart cartItems={cartItems}
                            removeFromCart={removeFromCart}
                        />
                }
            </>
        </div>


    );

}
export default ParentCard;