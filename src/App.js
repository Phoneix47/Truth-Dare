import React ,{useState} from 'react';
import './App.css';
import {Switch} from 'antd';
import CleanData from './CleanTND';
import DirtyData from './DirtyTND';

const App = () => {
  const [count, setCount] = useState(0);
  const Inc = () => {
  setCount(count + 1);
  };

  const [toggle, setToggle] = useState(false);
  const [togglee, setTogglee] = useState(false);
  const togglerr = () => {
  togglee ? setTogglee(false): setTogglee(true);
  }

  const toggler = () => {
  toggle ? setToggle(false): setToggle(true);
  }

  return (
  <>
  <div>
    <h1 className="headerr"> Truth & Dare </h1>
  </div>
  <div className="Body">
  <div className="header">
  <h2 className="heading"> {CleanData[count].type} </h2>
  </div>

  <div className="card"><h3 className="dare">  {CleanData[count].ques} </h3></div>
  <button className="btn" onClick={Inc}> <p className="inbtn"> Push<br /> 2 <br /> Start </p> </button>
  {toggle ? <span> Play Dirty </span> : <span> Play Clean</span>}
  <br />
  <div className="Switch1">
  <Switch onClick={toggler} />
  </div>

 {togglee ? <p className="a"> English </p> : <p className="b"> Hindi </p>  }
  <br />
  
  <div className="Switch2">   
    <Switch onClick={togglerr} />
  </div>
  </div>
 </>
    
  );
}

export default App;
