import React, { useContext } from 'react'
import { ShopeContext } from '../Context/ShopeContext'
import dropdown_icon from '../assets/dropdown_icon.png'
import Item from '../Components/Item'
import './ShopCategory.css'

const ShopeCategory = (props) => {
  const {all_product} = useContext(ShopeContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shop-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shop-category-product">
        {all_product.map((item,i)=>{
           if(props.category === item.category){
            return <Item  key={i} id={item.id} name={item.name} image={item.image}
            new_price={item.new_price} old_price={item.old_price}/>
           }else{
            return null;
           }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopeCategory