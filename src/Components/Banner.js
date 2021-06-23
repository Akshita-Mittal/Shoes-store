import React from 'react'
import {Link} from 'react-router-dom'

const Banner = () => {
    return (
        <section className="banner-area">
            <div className="container">
            <div className="row">
					<div className="col-sm-7">
						<div className="banner_taital">
							<h1 className="banner_text">New Running Shoes </h1>
							<h1 className="mens_text">Men's Like Plex</h1>
							<Link to="/products" className="more_bt">See More</Link>
						</div>
					</div>
					<div className="col-sm-5">
						<div className="shoes_img">
							<img src="../images/shoes-img2.png" alt="img" />
						</div>
					</div>
				</div>
            </div>
        </section>
    )
}

export default Banner;
