import React,{useState,useEffect} from "react";
import PropTypes from "prop-types";

const MyComponent=({initialValue,onButtonClick})=>{
  const [value,setValue]=useState(initialValue);

  useEffect(()=>{
    console.log("Intial value",initialValue)
  },[initialValue])

  const handleClick =()=>{
    setValue(value+1);
    onButtonClick();
  };

  return(
    <div>
      <h1>{value}</h1>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
  
}

MyComponent.propTypes={
  initialValue: PropTypes.number,
  onButtonClick: PropTypes.func
}
MyComponent.defaultProps={
  initialValue: 0,
  onButtonClick: ()=>{}
}

export default MyComponent;