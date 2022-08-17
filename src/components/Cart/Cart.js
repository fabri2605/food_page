import { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const [orderWasSent, setOrderWasSent] = useState(false);
    const [posted, setPosted] = useState('');

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item);
        setOrderWasSent(false);
    };

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    changable={true}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandler.bind(null, item)}
                />
            ))}
        </ul>
    );

    async function postingOrder() {
        setPosted('');
        setOrderWasSent(true);
    }

    async function confirmation(e) {
        setOrderWasSent(false);
        const user = [];
        for (const key in e) {
            user.push(e[key]);
        }
        const [name, street, postal, city] = user;
        const order = {
            id: Date.now(),
            name: name,
            street: street,
            postal: postal,
            city: city,
        };
        const response = await fetch(
            process.env.REACT_APP_NOT_SECRET_CODE_ORDERS,
            {
                method: 'POST',
                body: JSON.stringify({order: cartCtx.items, user: order}),
                headers: { 'Content-Type': 'application/json' },
            }
        );
        if (response.ok) {
            cartCtx.clearItems();
            setPosted(<p className={classes.sent}>Your order was updated</p>)
        }
    };
    const cancelation = (e) => {
        e.preventDefault();
        props.onClose();
    };

    const sent = <p className={classes.sent}>Your order has been updated!</p>;

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {!orderWasSent && (
                <div className={classes.actions}>
                    <button
                        className={classes['button--alt']}
                        onClick={props.onClose}
                    >
                        Close
                    </button>
                    {hasItems && (
                        <button
                            onClick={postingOrder}
                            className={classes.button}
                        >
                            Order
                        </button>
                    )}
                </div>
            )}
            {posted}
            {orderWasSent && (
                <Checkout onCancel={cancelation} onConfirm={confirmation} />
            )}
        </Modal>
    );
};

export default Cart;
