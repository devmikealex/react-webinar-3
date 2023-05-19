import React from 'react'
import { numberToPrice, plural } from '../../utils'
import './style.css'

function CartCount({list}) {
  let fullPrice = 0, count = 0

  const a = list.filter((item) => {
    if(item.cartCount){
      fullPrice += item.price * item.cartCount
      count += item.cartCount
      return true
    }
  })

  const countInfo = count ? `${count} товар${plural(count, {one: '', few: 'а', many: 'ов'})} / ${numberToPrice(fullPrice)}` : 'пусто'

  return (
    <div className='CartCount'>
      <div className='CartCount__text'>В корзине:</div>
      <div className='CartCount__count'>{countInfo}</div>
    </div>
  )
}

export default React.memo(CartCount)
