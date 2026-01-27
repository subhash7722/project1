import React, { useState } from 'react'
function App(){
  var [input,setinput]=useState("")
  var [data,setdata]=useState("")
  async function handleclick() {
    var API_KEY="c7e1718e8d122b30f3da59dff8ea6acb"
    var result=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API_KEY}`)
    var myresult= await result.json()
    setdata(myresult.main)
    
    console.log(data);
    
  }
  console.log(data);
  

 return(
  <div>
    <h1>weather App</h1>
    <input onChange={(e)=>setinput(e.target.value)} value={input} type="text" />
    <button onClick={handleclick}>click</button>
      {
    data?<div>
    <h1>{data.temp}</h1>
    <h1>{data.feels_like}</h1>
    
    </div>:"not found"
  }
  </div>

 )
}
export default App