import Counter from "./Counter"
import img from './img/Espada.jpg'
import React from 'react'

function Main() {
  return (
    <div>
        <Counter datos={['Alexis','20962', '5A']}/>
        <img src = {img} alt="Espada.jpg"></img>  
    </div>
  )
}

export default Main