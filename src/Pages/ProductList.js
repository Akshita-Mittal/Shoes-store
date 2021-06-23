import React from 'react'
import {Link} from 'react-router-dom'
import ProductData from '../ProductData/ProductData'

const ProductList = () => {
    //console.log(ProductData);
    const listItems = ProductData.map((item)=>
     <div className="col-md-4" key={item.id}>
            <div className="product-card">
                <Link to={"/products/"+item.id} className="product-img">
                <img src={item.thumb} alt={item.product_name} />
                </Link>
                <div className="product-detail">
                    <h2><Link to={"/products/"+item.id}>{item.product_name}</Link></h2>
                    <h3>{item.price}<span>{item.currency}</span></h3>
                </div>
                <div className="btn">
                    <button className="green-btn">Add To Cart</button>
                </div>
            </div>
     </div>
    );
    return(
        <div className="main-content">
            <h2 className="main-heading">Shoes Store</h2>
            <div className="container">
                <div className="row">
                    {listItems}
                </div>
            </div>
        </div>
    )
}

export default ProductList;
