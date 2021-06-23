import React, {useState} from 'react'
import CartItem from '../Components/CartItem'
import ProductData from '../ProductData/ProductData'

const Cart = () => {

    const [item, setItem] = useState(ProductData)

    return (
        <div className="main-content">
            <h2 className="main-heading">Shoes Store</h2>
            <div className="container">
                <div class="row">
                    <div className="main-cart-section">
                        <h1 className="main-cart-heading">Shopping Cart</h1>
                        <p className="main-cart-title">You have <span className="total-items-count">9</span> items in your shopping cart</p>
                        <div className="cart-items">
                            <div className="cart-items-container">
                               
                                    {
                                        item.map((curItem)=>{
                                           return <CartItem key={curItem.id} {...curItem} />
                                        })
                                    }
                                   
                                
                            </div>
                        </div>
                        <div className="card-total">
                             <h3>Cart Total: <span>350$</span></h3>
                             <button class="green-btn">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Cart;
