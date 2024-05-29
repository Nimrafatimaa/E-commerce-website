import React, {useContext} from 'react'
import { ShopeContext } from '../Context/ShopeContext'
import { useParams } from 'react-router-dom';
import BreadCrums from '../Components/BreadCrums';
import ProductDisplay from '../Components/ProductDisplay';
import Description from '../Components/Description';
import Related from '../Components/Related';

const Product = () => {
  const {all_product}= useContext(ShopeContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId) )
  return (
    <div>
      <BreadCrums product={product}/>
      <ProductDisplay product={product}/>
      <Description/>
      <Related/>
    </div>
  )
}

export default Product