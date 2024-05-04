import React from 'react'

const Contact = () => {
  return (
    <div>
      <section style={{backgroundColor: 'black', color: 'whitesmoke',marginBottom:"160px"}}>
  <div className="row" style={{textAlign: 'start', marginLeft: 100, paddingTop: 50, display: 'flex'}}>
    <div className="col-lg-6" style={{marginLeft:"300px"}}>
      <h2 style={{fontSize: '25p', textAlign: 'start',marginTop:"20px"}}>Contact me<br /> <br /></h2>
      <div><h4><i className="fa-sharp fa-solid fa-location-dot" /> address</h4>
        Shri Sai Apartment, pimple Gurav ,Pune<br /><br /><br></br>
      </div>
      <div><h4><i className="fa-solid fa-phone" />  Phone No.<br /> </h4>
        9766745560<br /><br /><br></br>
      </div>
      <div><h4><i className="fa-regular fa-paper-plane" /> Email-id<br />Shikha26jan86@gmailcom </h4>   
      </div>

         </div>
    
  </div>
</section>

    </div>
  )
}

export default Contact