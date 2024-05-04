import React from "react";

const Home = () => {
  return (
    <>
      <div>
        <section className="firstSection">
          <div
            className="leftSection"
            style={{ fontSize: "50px", marginTop: "100px" }}
          >
            Hi, My name is <span style={{ color: "brown" }}> Shikha</span>
            <div>
              And I am a passsionate
              <div className="purple">Web Developer </div>
            </div>
            <span id="element" />
            <br />
          </div>
          <div className="rightSection">
            <img className="img1" sec="" alt=""></img>
          </div>
        </section>
        <br />
        <br />
        <br />
      
      </div>
      <div>
        <div>
          <span
            className="text_gray"
            style={{
              textAlign: "center",
              marginLeft: "20px",
              fontSize: "20px",
              margin: "150px",
            }}
          >
            What I have done so far
          </span>
          <p style={{ marginLeft: "150px", fontSize: "50px" }}>
            Work Experience
          </p>
          <div style={{ display: "flex" }}>
            <div>
              <img
                style={{
                  height: "350px",
                  width: "350px",
                  marginLeft: "140px",
                  marginTop: "30px",
                }}
                src="https://jooinn.com/images/hand-on-keyboard-2.jpg"
                alt
              />
              <br></br>
            </div>
            <div
              className="box"
              style={{ marginLeft: "100px", display: "flex", gap: "150px" }}
            >
              <div className="verticle">
                <div className="vertical_tital">
                  <h6>
                    SCALEFULL TECHNOLOGIES<br></br>FULL stack developer
                    <br></br>( DEC 2023 – Present )
                  </h6>
                </div>
                <div
                  className="vertical_desc"
                  style={{ fontSize: "15px", textAlign: "justify" }}
                >
                  <ul className="ExperianceUl">
                    <li>
                      Key contributor to the front-end admin interface of an
                      online examination system web app, seamlessly integrating
                      it with REST APIs for a user-friendly experience.
                    </li>
                    <li>Technologies Used – Reat JS, REST APIs, AW</li>
                  </ul>
                  <br />
                </div>
              </div>
              <div className="verticle">
                <div className="vertical_tital">
                  O TREE SOLUTIONS PVT. LTD - (ATHLETTO .COM)
                  <br />
                  ( NOV 2022 – NOV 2023 )
                  <br />
                </div>
                <div
                  className="vertical_desc"
                  style={{ fontSize: "15px", textAlign: "justify" }}
                >
                  <ul className="ExperianceUl">
                    <li>
                      Worked as a UI developer, created and modified the UI
                      interfaces as per the requirements using ReactJs, HTML,
                      CSS, Bootstrap.
                    </li>
                    <li>
                      Worked on CURD operations to manipulate data on the UI
                      interface using REST API and services.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="verticle">
                <div className="vertical_tital" >
                  ASSIMILATE TECHNOLOGIES (BANER) PUNE
                  - Angular Developer (MAR 2022 – JUN 2022)
                  <br />
                </div>
                <div
                  className="vertical_desc"
                  style={{ fontSize: "15px", textAlign: "justify" }}
                >
                  <ul className="ExperianceUl">
                    <li>
                      Web application development using Angular, HTML, CSS.{" "}
                    </li>
                    <li>
                      Creating UI Components adding business logic to the
                      components, creating services, sharing data within the
                      components, routing etc
                    </li>
                  </ul>
                  <br />
                </div>
                <br />
              </div>
            </div>
          </div>
    
          <br />
          <br />
        </div>
      </div>
      <div>
        
        <br />
        <br />
      </div>
  

      <div>
        <section
          className="education"
          style={{
            backgroundColor: "black",
            color: "white",
            paddingLeft: 100,
            height: 230,
            paddingTop: 80,
          }}
        >
          <div style={{ display: "flex" }}>
            <div>
              <h1 style={{marginBottom:"90px"}}>EDUCATION</h1>
              
              <h3>
                2010  -  MCA - Rajarshi Shahu Institute Of Management,Aurangabaad
                <br />
              </h3>
              <br />
              <h3>
                2007 - BSC (Computer Science ) - Hislop College,Nagpur
                <br />
              </h3>
              <br />
              <h3>2004 - 12th - (Nagpur) </h3>
              <br />
              <h3>2002 - 10th - (Nagpur) </h3>
              <br /> <br /> <br />
            </div>
            <img
                style={{ height: "400px", width: "400px", borderRadius: "50%",marginLeft:"150px" }}
                src="https://www.fateheducation.com/landingpages/0010Search5/images/cap.webp"
                alt
              />
           
          </div>
        </section>
        <br />
        <br />
      </div>
      <div><br></br>
        <section style={{marginTop:"300px", marginLeft:"100px"}}>
          <h1><strong> SKIILS</strong> </h1><br></br><br></br>
            <div className="skills">
              Frontend  <br></br> HTML5 , CSS3 ,Bootstrap ,Angular , JavaScript , React.js
            </div><br></br>
            <div className="skills">
              Backend   <br></br> JavaScript , NodeJS , SQL
            </div><br></br>
            <div className="skills">
              DataBase   <br></br> MongoDB , MySQL
            </div><br></br>
        </section>
      </div>
       <div>
        <section style={{marginTop:"200px", marginLeft:"100px"}}>
        <h1>CERTIFICATION</h1>
        <h3>MERN – FULL STACK DEVELOPER – Wisdom Sprouts IT Training HUB</h3>
        </section>
       
      </div>
      
    </>
  );
};

export default Home;
