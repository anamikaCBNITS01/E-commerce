import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from '../../features/userSlice'
import styles from './style.module.css'

import DeleteIcon from '@mui/icons-material/Delete';
import { Avatar, IconButton } from "@mui/material";
import empty from '../../assets/emptyCart.jpg'
import { Link } from "react-router-dom";

const CartContainer = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [user, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>


      {
        user.cartItems.length === 0 ? (
          <div>
          <center>
          <h1> Your Cart is Empty</h1>
          <img src={empty}/>
          <div>
            <Link to="/">Continue Shopping</Link>
          </div>
          </center>
          </div>
        ) : (
          <div >
            <div>
              <div>
                {
                  user.cartItems && user.cartItems.map((cartItem) => (
                    <div>
                      <div className={styles.cartItems} key={cartItem.id}>
                        <div>
                          <img className={styles.images} src={cartItem.image} alt={cartItem.name} />
                          <div>
                            <div>
                              <h3>{cartItem.name}</h3>
                              <p>{cartItem.desc}</p>

                            </div>
                          </div>
                          <div>&#x20b9;{cartItem.price}</div>
                        </div>
                        <div className={styles.cartItems}>
                          <div>
                            <Avatar className={styles.sub} onClick={() => handleDecreaseCart(cartItem)}>
                              -
                            </Avatar>


                          </div>
                          <Avatar variant="rounded" className={styles.quentity}>{cartItem.cartQuantity}</Avatar>
                          <div><Avatar className={styles.add} onClick={() => handleAddToCart(cartItem)}>+</Avatar></div>
                          {/* <div className="cart-product-total-price">
                          ${cartItem.price * cartItem.cartQuantity}
                        </div> */}
                        </div>

                        <div>
                          <div>
                            &#x20b9;{cartItem.price * cartItem.cartQuantity}
                          </div>
                          <IconButton onClick={() => handleRemoveFromCart(cartItem)}>
                            <Avatar className={styles.sub} variant="rounded"> <DeleteIcon /></Avatar>
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div><hr />
              <div className={styles.TotalData}>
                <div>
                  <Avatar variant="rounded" className={styles.clearBtn} onClick={() => handleClearCart()}>
                    Clear Cart
                  </Avatar>
                </div>
                <Avatar variant="rounded" className={styles.TotalBtn}>
                  <span>Subtotal</span>
                  <span>&#x20b9;{user.cartTotalAmount}</span>
                </Avatar>
              </div>
            </div>

          </div>
        )
      }
    </div >
  );
};

export default CartContainer;