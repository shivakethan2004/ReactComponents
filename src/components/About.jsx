import React, { useState } from 'react'

const About = () => {
  const [darkMode, setDarkMode] = useState('true')
  return (

    <div className={darkMode ? "dark" : ""}>
    {/* Parent container toggles the dark mode */}
    <main className='dark:bg-[#1E1E1E]'>
    <img className = ' relative'src="./darkmode.png" alt="" />
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-4 rounded absolute top-40 left-6"
        >
          {/* Toggle {darkMode ? "Light" : "Dark"} Mode */}
        </button>
    </main>
   
      
  
  </div>
   
  )
}

export default About