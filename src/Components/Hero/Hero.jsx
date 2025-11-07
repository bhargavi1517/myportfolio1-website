import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Bhargavi_Jadhav_Resume.pdf"; // Resume file in public folder
    link.download = "Bhargavi_Jadhav_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("✅ Resume successfully downloaded!");
  };

  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="Profile" />
      
      <h1>
        <span>I'm Bhargavi Jadhav,</span> pursuing a degree in 
        Artificial Intelligence and Data Science at 
        Indira College of Engineering and Management.
      </h1>

      <p>
        Bhargavi Jadhav is an Engineering student at Indira College of 
        Engineering and Management (ICEM), Pune, dedicated to mastering AI 
        technologies and applying them to real-world problems. Alongside my 
        technical pursuits, I'm passionate about blending creativity with 
        sustainable expertise to enrich my problem-solving approach.
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with Me
          </AnchorLink>
        </div>
        <div className="hero-resume" onClick={handleResumeDownload}>
          My Resume
        </div>
      </div>
    </div>
  )
}

export default Hero