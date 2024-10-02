import React from 'react'
import skills from './data/skills.json'
import "./Skills.css"

function Skills() {
  return (
    <>
     <div className="container skills" id='skills'>
     <center>
     <h1>SKILLS</h1>
     </center>
      <div className="items" >
      {skills.map((data)=>(
      <>
      
      <div className="item" key={data.id}
      data-aos="flip-left">
        <img src={`/assets/${data.imageSrc}`} alt="" />
        <h3>{data.title}</h3>
      </div>
      </>
    ))}
      </div>
      </div> 
    </>
  )
}

export default Skills
