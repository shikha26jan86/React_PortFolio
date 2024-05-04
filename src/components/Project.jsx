import React from 'react'
import { Link } from 'react-router-dom'

const Project = () => {
  return (
    <div style={{marginTop:"60px"}}>
     <div className="row" style={{textAlign: 'start', marginLeft: 30, paddingTop: 10, display: 'flex'}}>
    <div className="col-lg-6" style={{marginTop:"60px"}}>
     <h1>Projects</h1><br></br><br></br>
      <h2>https://github.com/shikha26jan86/React_PortFolio</h2><br></br>
      <h2>https://github.com/shikha26jan86/Dmart</h2>
      </div><br></br>
    <div className="col-lg-6">
      <img style={{height: 400, width: 700, paddingLeft: 90,marginLeft:"20px",marginBottom:"80px"}} src="https://tse3.mm.bing.net/th?id=OIP._leSgBC8nqAW9QqDW1WrHwHaFL&pid=Api&P=0&h=180" alt />
    </div>
  </div>
    </div>
  )
}

export default Project