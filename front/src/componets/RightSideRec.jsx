import React, { useState, useEffect } from 'react';
import "../compStyles/RightSideRec.css"
import imageChef from "../Recepie__images/image4.png"
import {AiOutlineLine} from "react-icons/ai"

const imageData = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJk9USFIRr9ocdqeub3dTJOa1H4ycJo70p_Q&usqp=CAU",
    title: "desertai"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJk9USFIRr9ocdqeub3dTJOa1H4ycJo70p_Q&usqp=CAU",
    title: "desertai"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJk9USFIRr9ocdqeub3dTJOa1H4ycJo70p_Q&usqp=CAU",
    title: "desertai"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJk9USFIRr9ocdqeub3dTJOa1H4ycJo70p_Q&usqp=CAU",
    title: "desertai"
  }
]

const RightSideRec = () => {
  // Create an array of state variables to hold the isHovering state for each item
  const [hoverStates, setHoverStates] = useState(Array(imageData.length).fill(false));
  const mediaQuery = window.matchMedia('(min-width: 1210px)');

  // State to hold the current media query match status
  const [matches, setMatches] = useState(mediaQuery.matches);

  // Function to handle the media query change
  const handleMediaQueryChange = (event) => {
    setMatches(event.matches);
  };

  useEffect(() => {
    // Add the event listener for media query change
    mediaQuery.addListener(handleMediaQueryChange);

    // Clean up the event listener on component unmount
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, [mediaQuery]);

  const handleMouseOver = (index) => {
    // Set the corresponding isHovering state to true
    setHoverStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = true;
      return newStates;
    });
  };

  const handleMouseOut = (index) => {
    // Set the corresponding isHovering state to false
    setHoverStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = false;
      return newStates;
    });
  };

  const lgSreen = (item, index) => {
    return (
      <div
        className='gird-img'
        key={index}
        onMouseOver={() => handleMouseOver(index)}
        onMouseOut={() => handleMouseOut(index)} 
      >
        <img src={item.image} alt="" />
        {(index === 0 || index === 1) && (
          <div className="grid-title">
            <h3>Šokoladinis tiramisų tortas</h3>
            <span>{item.title}</span>
          </div>
        )}
  
        {(index === 2 || index === 3) && (
          <>
            {hoverStates[index] && (
              <div className="grid-titleSmall">
                <h3>Šokoladinis tiramisų tortas</h3>
                <span>{item.title}</span>
              </div>
            )}
          </>
        )}
      </div>
    );
  }

  const smSreen = (item, index) => {
    return (
      <div
        className='gird-img'
        key={index}
      >
        <img src={item.image} alt="" />
          <div className="grid-title">
            <h3>Šokoladinis tiramisų tortas</h3>
            <span>{item.title}</span>
          </div>
      </div>
    );
  }

  return (
    <section style={{transition: "ease 1s"}} className='flex4 flexColStart right-container'>
      <div className="content-box">
        <div className="top-bar">
          <div className="flex1  search-bar">
            <input type="text" placeholder='Receptų paieška...' />
            <button>Rasti</button>
          </div>
          <div className="flex1 flexEnd add-link">
            <a href="Upload_recepies">Įkelti receptą</a>
          </div>
        </div>
        <div className="newRec-box">
          <div className="flex1 about-rec">
              <h2 className='day-title'>
                <img src={imageChef} alt="" />
                Šiandienos patiekalas:
              </h2>
              <div className='day-food'>
                <small>
                  Šokoladinis tiramisų tortas
                </small>
              </div>
              <div className='day-rating'>
                <div className="short-rating">
                  <AiOutlineLine className='day-icon' />
                  <span>0</span>
                </div>
              </div>
              <div className="day-desc">
                Pasakiškai skanus tortas! ;)
              </div>
              <a href="" className="day-link">Žiūrėti receptą</a>
          </div>

          <div className="about-img flex1">
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJk9USFIRr9ocdqeub3dTJOa1H4ycJo70p_Q&usqp=CAU" alt="" />
              <div className="rec-about">Pasakiškas tortas / desertai</div>
            </div>

          </div>
        </div>
        <div className="about-title">
          <h1>Desertai jums</h1>
        </div>
        <div className="deserts-box">
          {imageData.map((item, index) => (
            matches ? lgSreen(item, index) : smSreen(item, index)
          ))}
        </div>
        <div className="latest-title">
          Naujausi receptai
        </div>
        <div className="deserts-allRecp">
          {imageData.map((item, index) => (
            <div
              className='gird-allBox'
            >
              <div className="imgBox">
                 <img src={item.image} alt="" />
              </div>
                <div className="grid-allTitle">
                  <h4>Šokoladinis tiramisų tortas</h4>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSideRec;