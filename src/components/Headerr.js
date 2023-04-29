import React from 'react'
import { moneyFormat } from './helpers'

function Header({ total, money }) {
    return (
        <div className='sticky'>
            {
                money - total === 0 && (
                    <div className='header'>Maalesef Harcayacak Paranız Kalmadı!!!</div>
                )
            }
            {
                total === 0 && (
                    <div className='header'>Harcamak için  <span>$  {moneyFormat(money)} </span> paranız var </div>
                )
            }
            {
                total > 0 && money - total !== 0 && (
                    <div className='header'>Harcamak için <span> $  {moneyFormat(money - total)} </span> paranız kaldı! </div>
                )
            }


        </div>
    )
}


export default Header
