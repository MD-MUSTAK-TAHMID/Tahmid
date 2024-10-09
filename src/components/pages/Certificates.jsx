import React from 'react'
import Container from '../layer/Container'
import Tittle from '../layer/Tittle'
import Certificates1 from "../../assets/Tahmid Certeficate1.png"
import Certificates2 from "../../assets/Tahmid certifiate2.png"
import Certificates3 from "../../assets/Tahmid Certificate 3.png"
const Certificates = () => {
  return (
    <div>
        <Container className="pb-[100px]">
        <Tittle text="My Certificates"/>
        <div className="flex flex-wrap justify-between gap-y-20">
            <img src={Certificates1} alt="" />
            <img src={Certificates2} alt="" />
            <img src={Certificates3} alt="" />
            <img src={Certificates1} alt="" />
        </div>
        </Container>
    </div>
  )
}

export default Certificates