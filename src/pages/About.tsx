import React from 'react'
import Wrapper from '../sections/Wrapper';
import avatarImage from "../assets/rohit.jpg"
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function About() {
  return (
    <div className="profile">
      <img className='profile-image' src={avatarImage} alt="avatar" />
      <h1 className="profile-text">Hi I am Rohit Goud</h1>
      <h2 className="profile-text">The creator of this pokedox</h2>
      <h4 className="profile-text">This project is crerated to showcase my skills</h4>
      <div className="profile-links">
        <a href="https://github.com/rohit-goud"><FaGithub/></a>
        <a href="https://www.linkedin.com/feed/"><FaLinkedin/></a>
      </div>
    </div>
  )
}

export default Wrapper(About);