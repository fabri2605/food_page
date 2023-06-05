import React from 'react';
import classes from './Cart.module.css';

const Checkout = (props) => {
    const [name, setName] = React.useState('');
    const [street, setStreet] = React.useState('');
    const [postal, setPostal] = React.useState(0);
    const [city, setCity] = React.useState('');
    const [formIsTouched, setFormIsTouched] = React.useState(false);
    const [hasError, setHasError] = React.useState({
        name: false,
        street: false,
        postal: false,
        city: false,
    });

    const nameInputHandler = (e) => {
        setFormIsTouched(true);
        setName(e.target.value);
        if (e.target.value.length <= 4) {
            setHasError({ ...hasError, name: true });
        } else setHasError({ ...hasError, name: false });
    };
    const streetInputHandler = (e) => {
        setFormIsTouched(true);
        setStreet(e.target.value);
        if (e.target.value.length <= 5) {
            setHasError({ ...hasError, name: false, street: true });
        } else setHasError({ ...hasError, street: false });
    };
    const postalInputHandler = (e) => {
        setFormIsTouched(true);
        setPostal(e.target.value);
        if (e.target.value <= 1000) {
            setHasError({
                ...hasError,
                postal: true,
            });
        } else
            setHasError({
                ...hasError,
                postal: false,
            });
    };
    const cityInputHandler = (e) => {
        setFormIsTouched(true);
        setCity(e.target.value);
        if (e.target.value.length <= 1) {
            setHasError({
                ...hasError,
                city: true,
            });
        } else
            setHasError({
                ...hasError,
                city: false,
            });
    };

    const submitionHandler = (e) => {
        e.preventDefault();
        if (!formIsTouched) {
            setHasError({
                name: true,
                street: true,
                postal: true,
                city: true,
            });
            return;
        }
        if (
            hasError.name === false &&
            hasError.street === false &&
            hasError.postal === false &&
            hasError.city === false
        ) {
            props.onConfirm({
                name: name,
                street: street,
                postal: postal,
                city: city,
            });
        }
    };

    return (
        <form onSubmit={submitionHandler}>
            <div className={classes.inputGroup}>
                <label>Name</label>
                <input
                    onChange={nameInputHandler}
                    value={name}
                    type='text'
                ></input>
                {hasError.name && (
                    <p className={classes.error}>Your name must be longer</p>
                )}
            </div>
            <div className={classes.inputGroup}>
                <label>Street</label>
                <input
                    onChange={streetInputHandler}
                    value={street}
                    type='text'
                ></input>
                {hasError.street && (
                    <p className={classes.error}>Street must be longer</p>
                )}
            </div>
            <div className={classes.inputGroup}>
                <label>Postal Code</label>
                <input
                    onChange={postalInputHandler}
                    value={postal}
                    type='number'
                ></input>
                {hasError.postal && (
                    <p className={classes.error}>Something is wrong</p>
                )}
            </div>
            <div className={classes.inputGroup}>
                <label>City</label>
                <input
                    onChange={cityInputHandler}
                    value={city}
                    type='text'
                ></input>
                {hasError.city && (
                    <p className={classes.error}>City must be longer</p>
                )}
            </div>
            <div className={classes.actions}>
                <button onClick={props.onCancel} className={classes.button}>
                    Cancel
                </button>
                <button type='submit' className={classes.button}>
                    Confirm
                </button>
            </div>
        </form>
    );
};

export default Checkout;
