import React, { useContext } from 'react'
import { ShopeContext } from '../Context/ShopeContext'

const ShopeCategory = (props) => {
  const {all_product} = useContext(ShopeContext)
  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" />
    </div>
  )
}

export default ShopeCategory