import React from 'react'
import pokeball1 from "../assets/pokeball.png"
import pokeball2 from "../assets/pokeball2.png"

function Background() {
  return (
    <div className="background">
      <img src={pokeball1} alt="pokeball" className="pokeball poikeball1"/>
      <img src={pokeball2} alt="pokeball" className="pokeball poikeball2"/>
      <img src={pokeball1} alt="pokeball" className="pokeball poikeball3"/>
      <img src={pokeball2} alt="pokeball" className="pokeball poikeball4"/>
      <img src={pokeball1} alt="pokeball" className="pokeball poikeball5"/>
      <img src={pokeball2} alt="pokeball" className="pokeball poikeball6"/>
    </div>
  )
}

export default Background