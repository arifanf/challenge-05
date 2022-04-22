import React, { useState } from 'react'
import Panel from '../../Components/Panel/Panel'
import Result from '../../Result/Result'
import Car from '../../Components/Hero/Car'
import Hero from '../../Components/Hero/Hero'
import './home.css'

const Home = () => {

  const [carList, setCarList] = useState([])

  return (
    <div>
        { carList.length <= 0 && <Car />}
        { carList.length > 0 && <Hero />}
        <Panel setCarList={setCarList}/>
        <Result carList={carList}/>
    </div>
  )
}

export default Home