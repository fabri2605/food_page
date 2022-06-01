import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import OrdersCart from './store/OrdersCart';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [orderIsShown, setOrderIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const showOrdersHandler = () => {
    setOrderIsShown(true);
  };

  const hideOrderHandler = () => {
    setOrderIsShown(false);
  };

  return (
    <CartProvider>
      {orderIsShown && <OrdersCart onClose={hideOrderHandler} />}
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowOrders={showOrdersHandler} onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
