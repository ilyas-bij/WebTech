import React from 'react'
import './Card.css'


export default function Card({item}) {
    return (
        <div className='Card'>
            <div className='Card-head'>
                {
                    item.categories.map((i,x)=> <h2 key={x}>{i.slug}</h2>)
                }
               
            </div>
            <div className='Card-boody'>
                <div className='bg-img'>

               
                <img  className='img'  src={`https://www.wappalyzer.com/images/icons/${item.icon}`}  alt=''></img>
                </div>
                <a href={item.website}>
                <p className='name'>{item.slug}</p>
                </a>
            </div>            
        </div>
    )
}
