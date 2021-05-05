import React from 'react';
import '../CheckoutProduct.css'
import { useDispatch } from 'react-redux';
// import { removeFromBasket } from '../store/actionTypes/actionTypes';
import reducer from "../store/reducers/reducer"

function CheckoutProduct({ id, title, price, rating, image }) {

    console.log(id)
    const dispatch = useDispatch()
    // const removeItemFromBasket = () => {
    //     dispatch(removeFromBasket({
    //         id
    //     }))
    // }
    const removeItemFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    // const removeFromBasket = (id) => {
    //     props.onRemoveFromBasket(id)
        // dispatch({
        //     type: 'REMOVE_FROM_BASKET',
        //     id: id
        // })

    // }

    // let itemList = props.items.map(item => {
        return (
            <div className="checkoutProduct">
            <img src={image} className="checkoutProduct__image" alt="The product for sale"></img>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p key={i}>🌟</p>
                    ))}
                </div>
                <button onClick={removeItemFromBasket}>Remove From Basket</button>
            </div>
        </div>
        )
    }   

export default CheckoutProduct