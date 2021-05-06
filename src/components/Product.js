import React from "react";
import "../Product.css";
import { useDispatch } from 'react-redux';

function Product({ id, image, price, rating, title }) {

  const dispatch = useDispatch()

  const addItemToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
    
  return(
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>🌟</p>
            ))}
        </div>
      </div>
      <img
        src={image}
        alt=""
      ></img>
      <button onClick={addItemToBasket}>Add To Cart</button>
    </div>
  )
}

export default Product;
