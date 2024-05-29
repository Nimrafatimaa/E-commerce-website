import React from 'react'
import './Productdisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { useContext } from 'react'
import { ShopeContext } from '../Context/ShopeContext'

const ProductDisplay = (props) => {
    const { product } = props;
    const {Addtocart} = useContext(ShopeContext);
    return (
        <div className='productdisply'>
            <div className="productdisplyLeft">
                <div className="product-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className="productdisply-img">
                    <img className='product-main-img' src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplyRight">
                <h1>{product.name}</h1>
                <div className="product-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplayRight-price">
                    <div className="productdisplayRight-price-old">${product.old_price}</div>
                    <div className="productdisplayRight-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplayRight-discription">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero cumque ipsa sapiente
                    alias tempora soluta quasi, molestiae illo in inventore natus dolorum, earum voluptatibus. Laborum.
                </div>
            
            <div className="productdisplayRight-size">
                <h1>Select Size</h1>
                <div className="productdisplayRight-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{Addtocart(product.id)}}>ADD TO CART</button>
            <p className='product-disply-rightcategory'><span>Category: </span> Women, T-shirt, Crop Top </p>
            <p className='product-disply-rightcategory'><span>Tags: </span> Modren Latest </p>
            </div>
        </div>
    )
}

export default ProductDisplay