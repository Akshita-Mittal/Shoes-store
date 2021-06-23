import React from 'react'

const CartItem = ({product_name, description, price, currency, thumb}) => {
    return (
        <>
        <div className="items-info">
            <div className="product-image">
                <img src={thumb} alt="img" />
            </div>
            <div className="title">
                <h2>{product_name}</h2>
                <p>{description}</p>
            </div>
            <div className="add-minus-quantity">
                <i class="fa fa-minus minus" aria-hidden="true"></i>
                    <input type="text" placeholder="2" />
                <i class="fa fa-plus add" aria-hidden="true"></i>
            </div>
            <div className="price">
                <h3>{price}<span>{currency}</span></h3>
            </div>
            <div className="remove-item">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
            </div>
        </div>
        <hr />
        </>
    )
}

export default CartItem;
