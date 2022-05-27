import React from 'react'

export default function Groups(props) {
  return (
    <div>
        
        <div className='my-3'style={{display:'flex',justifyContent:'space-between'}}>
        <div>
        <img src={props.img} alt='...'/>
        <p className=' mx-3' style={{display:'inline'}}>{props.name}</p>
        </div>
        <button className='btn btn-secondary my-2 my-btn-1' style={{padding:''}}>Follow</button>
        </div>
    </div>
  )
}
