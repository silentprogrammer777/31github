import React, {useState} from "react";
function App() {
    const [data,setData] = useState({})
  return (
   <div>
     <h3></h3>
       <input value={data.name} onChange={e=>
       setData({...data,name:e.target.value})}
       placeholder='Enter name'/>
       {/*<div>*/}
       {/*    <b>Valur:</b>*/}
       {/*    {name}*/}
       {/*</div>*/}
   </div>
  );
}

export default App;
