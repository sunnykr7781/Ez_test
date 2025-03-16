import React from 'react'
import "./Main.css" 
import RightSide from '../RightSide/RightSide'
import LeftSide from '../LeftSide/LeftSide'

const Main = () => {
  return (
    <>
    <div className="Main"><LeftSide></LeftSide>
    <RightSide></RightSide></div>
    
    </>
  )
}

export default Main
