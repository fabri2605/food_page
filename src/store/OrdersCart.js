import React from 'react';
import Modal from '../components/UI/Modal';
import classes from '../components/Cart/Cart.module.css';
import { useState } from 'react';
import CartItem from '../components/Cart/CartItem';

const OrdersCart = (props) => {
    const [myOrders, setMyOrders] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [fetched, setFetched] = useState(false);
    const [name, setName] = useState('');
    async function fetchOrdersHandler() {
        setFetched(true);
        setIsLoading(true);
        try {
            const response = await fetch(
                process.env.REACT_APP_NOT_SECRET_CODE_ORDERS
            );
            if (response.ok) {
                console.log('All right!');
            }
            const data = await response.json();

            const loadedOrders = [];
            let found = false;

            for (const key in data) {
                if (data[key].user.name.trim() === name.trim() && !found) {
                    found = true;
                }
                if (found) {
                    for (const item of data[key].order) {
                        loadedOrders.push({
                            ...item,
                        });
                    }
                    setMyOrders(loadedOrders);
                }
            }
        } catch (e) {
            console.log(e.message);
        }
        setIsLoading(false);
    }

    const nameHandler = (e) => {
        setName(e.target.value);
    };

    let total = 0;
    for (const a of myOrders) {
        total = total + a.price * a.amount;
    }
    const totalAmount = total;

    return (
        <Modal onClose={props.onClose}>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <h2>Search to see your orders!</h2>
                    <label>Name</label>
                    <input
                        className={classes.inputfetch}
                        onChange={nameHandler}
                        value={name}
                    ></input>
                    {name.length > 3 && myOrders.length === 0 && (
                        <button
                            className={classes.buttonf}
                            onClick={fetchOrdersHandler}
                        >
                            Fetch orders
                        </button>
                    )}
                </div>
            )}
            {myOrders.length > 0 ? (
                <>
                    <ul className={classes['cart-items']}>
                        {myOrders.map((e) => (
                            <CartItem
                                key={e.key}
                                name={e.name}
                                amount={e.amount}
                                price={e.price}
                                changable={false}
                            />
                        ))}
                    </ul>
                    <div className={classes.total}>
                        <span>Total Amount</span>
                        <span>{totalAmount}</span>
                    </div>
                </>
            ) : fetched && !isLoading ? (
                <div className={classes.total}>
                    <p>There are no items ordered with that name</p>
                </div>
            ) : ''}
            <div className={classes.actions}>
                <button onClick={props.onClose} className={classes.button}>
                    Close
                </button>
            </div>
        </Modal>
    );
};

export default OrdersCart;
