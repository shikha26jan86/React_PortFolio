import React from 'react'

const Project = () => {
  return (
    <div>
      <section style={{backgroundColor: 'black', color: 'white', height: 420, margin: 30}}>
  <div className="row" style={{textAlign: 'start', marginLeft: 30, paddingTop: 10, display: 'flex'}}>
    <div className="col-lg-6">
      <h1 style={{color: 'white', fontWeight: 'bolder', fontSize: 30, paddingTop: 100}}>Projects</h1><br /><br />
      <h5 style={{fontSize: 20}}>O Tree Solutions Private Limited (Athletto.com), Frontend Developer Nagpur,<br />(9/2020 – 12/2021)<br /><br /></h5>
      <h5 style={{fontSize: 15}}>
        •	Web application development in Angular 10, CSS, HTML<br />
        •	Creating/Modifying web pages in HTML/CSS with help of bootstrap.<br />
        •	Writing logic and coding for web pages linking (routing) different web pages<br /><br />
      </h5>
      <a href="./contact_me.html"><button style={{padding: 10, borderRadius: 10, marginTop: 50, backgroundColor: 'red'}}>Contact Me</button></a>
    </div>
    <div className="col-lg-6">
      <img style={{height: 200, width: 200, paddingTop: 100, paddingLeft: 90}} src="https://purepng.com/public/uploads/medium/nature-usd.png" alt />
    </div>
  </div>
</section>

    </div>
  )
}

export default Project