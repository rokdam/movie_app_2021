import React from 'react';

// function Food(prop){
function Food({favorite}){
  // return <h1>I like {prop.favorite}</h1>;
  return (
    <div>
      <h1> I love {favorite} </h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <Food favorite ="TTeok" />
      <Food favorite ="kimchi" />
      <Food favorite="Ramen"/>
      <Food favorite="chukumi"/>
    </div>
  );
}

export default App;