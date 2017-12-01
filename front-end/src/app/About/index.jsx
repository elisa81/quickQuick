import React from 'react'

class About extends React.Component {
  render() {
    return (
      <div>


        <div className="backgroundAlt">
          <div className="container">
            <h1 id="aboutHeader"> ABOUT US </h1>
            <p className="homeStatements">The history of QuickQuick started when the Founder and CEO had to come up with a final project assignment at BrainStation.
            The project began as a small project but after positive reviews it was launched through a startup company.  We are a growing company and wish to meet your courier needs.</p>
          </div>
        </div>


        <div className="backgroundMain">
          <div className="container text-center">

            <h1 id="aboutHeader">OUR TEAM</h1>
            <img src="officePic.jpg" width="90%" id="teamPic"/>
            
            <p className="homeStatements">We are a dedicated group of people coming together to improve everyday tasks. </p>
            
          </div>
        </div>


      </div>

    )
  }
}

export default About