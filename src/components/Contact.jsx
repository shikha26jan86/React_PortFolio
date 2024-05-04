import React from 'react'

const Contact = () => {
  return (
    <div>
      <section style={{backgroundColor: 'black', color: 'whitesmoke'}}>
  <div className="row" style={{textAlign: 'start', marginLeft: 100, paddingTop: 50, display: 'flex'}}>
    <div className="col-lg-6">
      <h2 style={{fontSize: '25p', textAlign: 'start'}}>Contact me<br /> <br /></h2>
      <div><h4><i className="fa-sharp fa-solid fa-location-dot" /> address</h4>
        Shri Sai Apartment, pimple Gurav ,Pune<br /><br /><br></br>
      </div>
      <div><h4><i className="fa-solid fa-phone" />  Phone No.<br /> </h4>
        9766745560<br /><br /><br></br>
      </div>
      <div><h4><i className="fa-regular fa-paper-plane" /> Email-id<br />    Shikha26jan86@gmailcom </h4>   
      </div>
      <div className="icon" style={{marginTop: 30, display: 'flex', justifyContent: 'space-around'}}>
        <i className="fa-brands fa-facebook" />
        <i className="fa-brands fa-twitter" />
        <i className="fa-brands fa-instagram" />
        <i className="fa-brands fa-linkedin" />
      </div>
         </div>
    <div className="col-lg-6" style={{paddingLeft: 180}}>
      <input  type="text" id="fname" name="fname" placeholder='Enter name' /><br /><br /><br />
      <input type="text" id="fname" name="fname"  placeholder='Enter email name'/><br /><br /><br />
      <textarea name="message" rows={7} cols={22}  placeholder='enter text' /><br />
      <button style={{marginTop: 40, padding: 7, backgroundColor: 'red', borderRadius: 10}}>Submit</button>
    </div>
  </div>
</section>

    </div>
  )
}

export default Contact