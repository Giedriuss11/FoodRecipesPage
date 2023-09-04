import { useDispatch, useSelector } from 'react-redux';
import "../compStyles/LeftSideRec.css"
import imageLeft from "../Recepie__images/image.png"
import {recData} from "../dataRec/recChooseData"
import {setClass} from "../features/mainReducer"
import { useState, useEffect } from 'react';


const LeftSideRec = () => {

  const dispatch = useDispatch();
  const mediaQuery = window.matchMedia('(max-width: 950px)');
  const onOfBarClass = useSelector((store) => store.main.onOfBar);
  const initialHide = localStorage.getItem('hide') === 'true';
  const initialChage = localStorage.getItem('chage') === 'true';

  const [hide, setHide] = useState(initialHide);
  const [chage, setChange] = useState(initialChage);

  const setNewClass = (event) => {
    event.stopPropagation(); // Stop event propagation
    dispatch(onOfBarClass === "sm-column" ? setClass("none") : setClass("sm-column"));
    setHide((prevHide) => !prevHide); // Toggle hide state
    setChange((prevHide) => !prevHide)
  };

  useEffect(() => {
    const handleMediaQueryChange = (event) => {
      if (event.matches && !hide) {
        setHide(true); // This will hide onToolbar() when media query matches and hide is false
      } else if (!event.matches && hide) {
        setHide(false); // This will show onToolbar() when media query doesn't match and hide is true
      }
    };

    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, [mediaQuery, dispatch, hide]);

  useEffect(() => {
    localStorage.setItem('hide', hide);
  }, [hide, chage]);

  const onToolbar = () => {
    return (
      <section
      className='left-container flexEnd flex2 '>
      <div className="recepies-bar">
        <div className="image-container">
          <img style={{height: "100%", width: "100%"}} src={imageLeft} alt="" />
        </div>
        <div className="flexColCenter recepieChoose">
          <ul className='main-menu'>
            {recData.map((item, index) => <li>
              <a style={{ color: index === 0 ? "red" : "" }} href="">{item}</a>
            </li>)}
          </ul>
        </div>
      </div>
    </section>
    )
  }

  const ofToolbar = () => {
    if (!chage) {
        return (
      <section className='d-flex'>
        <div className='leftBox'></div>
        <div onClick={setNewClass} className='middleBox'>
          <span>Rodyti kategorijas</span>
        </div>
        <div style={{ backgroundImage: `url(${imageLeft})` }} className='rightBox'></div>
      </section>
    );
    } else {
      return (
        <section
        className='left-container flexEnd flex2 '>
        <div className="recepies-bar">
          <div className="tool-recepies"></div>
          <div className="flexColCenter recepieChooseOnOf">
          <div 
            onClick={setNewClass}
            style={{ backgroundImage: `url(${imageLeft})` }}
           className='rightBoxOnOf'></div>
            <ul className='main-menu'>
              {recData.map((item, index) => <li>
                <a style={{ color: index === 0 ? "red" : "" }} href="">{item}</a>
              </li>)}
            </ul>
          </div>
        </div>
      </section>
      )
    }
  
  };

  return hide ? ofToolbar() : onToolbar()
}

export default LeftSideRec