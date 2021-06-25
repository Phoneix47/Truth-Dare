import React from 'react';
import {useState} from 'react';
const Random = () => {
const [count, setCount] = useState(0);


const Inc = () => {
  setCount(count + 2);

};



return (
  <>
  <div className='table'>
<h1> 2 X 1 =  {count}</h1>
<button className="btn" onClick={Inc} >Click Me</button>

  </div>
  </>


);
};


export default Random;
