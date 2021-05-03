import React, { useState, useEffect } from "react";
import '../Orders.css'
import { db } from "../firebase"
import { useStateValue } from "../StateProvider";
import { FormHelperText } from "@material-ui/core";
import Order from './Order'

function Orders() {

    const [orders, setOrders] = useState([]);
    const [{ basket, user }, dispatch] = useStateValue();

    useEffect(() => {
        if(user) {
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

export default Orders