import { Fragment, useContext, useEffect, useState } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${
        btnIsHighlighted ? classes.bump : ''
    }`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <Fragment>
            <button className={btnClasses} onClick={props.onOrders}>
                <span className={`${classes.icon} ${classes.optional}`}>
                    <CartIcon icon='2' />
                    
                </span>
                <span >Your Orders</span>
            </button>
            <button className={btnClasses} onClick={props.onClick}>
                <span className={`${classes.icon} ${classes.optional}`}>
                    <CartIcon icon='1' />
                </span>
                <span>Your Cart</span>
                <span className={classes.badge}>{numberOfCartItems}</span>
            </button>
        </Fragment>
    );
};

export default HeaderCartButton;
