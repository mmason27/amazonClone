import React, { useState, useEffect } from "react";
import '../Orders.css'
import { db } from "../firebase"
import Order from './Order'
import { connect } from 'react-redux';

function Orders(props) {

    //initalizing local state for orders
    const [orders, setOrders] = useState([]);

    const user = props.user

    useEffect(() => {
        if(props.user) {
            db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .orderBy('created', 'desc') //ordering them in descending order (most recent order at the top)
            //mapping through the orders by id and data then adding them to a key
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
        } else {
            setOrders([])
        }
    
      }, [user])

    return (
        <div className="orders">
            <h1>Your Orders</h1>

            <div className="orders__order">
                {orders?.map(order => (
                    <Order order={order}/>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Orders)