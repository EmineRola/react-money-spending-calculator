import React from 'react'

function BasketItem({ item, product }) {
    return (

        <li className='basket-item'>
            {product.title} * <span>{item.amount}</span>
        </li>
    )
}

export default BasketItem
