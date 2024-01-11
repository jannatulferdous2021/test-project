import { useState } from "react";


const MyCompo = (props) => {

    const [points, setPoints] = useState(1)

    const mystyle = {
    backgroundColor: "lightblue",
    border: " 3px solid blue",
    padding: "10px",
    margin: '20px',
    borderRadius : '20px'
  }

  const handleAddPoints = () =>{
    const newPoint = points * 2
    setPoints(newPoint)
  }

  return (

    <div style={mystyle}>
      <h1>This is a heading</h1>
      <h1>Brand: {props.brand } price: {props.price}</h1> 
      <h1>I Have Point : {points}</h1>
      <button onClick={handleAddPoints}>ADD POINTS</button>
      <p style={{ color: "red", fontSize: "22px" }}>
        this is a paragraph where i write my lifestory
      </p>
    </div>
  );   
};

export default MyCompo;