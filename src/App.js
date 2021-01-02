import React from 'react';
import PropTypes from 'prop-types';

// function Food(prop){
function Food({name, picture, rating}){
  // return <h1>I like {prop.favorite}</h1>;
  return <div>
      <h1> I love {name} </h1>
      <h4> rate {rating}</h4>
      <img src={picture} alter={name} />
    </div>
}

//이곳에서 타입이 일치하지 않으면 콘솔에 warning이 표시됨\
// propTypes라는 이름으로 지어야 함! 꼭! 안그러면 에러됨
// 문서 https://reactjs-kr.firebaseapp.com/docs/typechecking-with-proptypes.html 참고
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "./logo192.png",
    rating: 4
  },
  {
    id: 2,
    name: "bibimbap",
    image: "./logo512.png",
    rating: 3
  },
];

// 이렇게 작성해서 써도 됨
function renderFood(dish){
  return <Food name={dish.name} picture={dish.image} rating={dish.rating} />
}

function App() {
  return (
    <div>
      {/* dish는 object임 */}
      {/* {foodILike.map(renderFood)} */}
      {foodILike.map(dish =>(
        // key는 리액트 내부에서 사용하기 위한 키로 이걸로 다른 컴포넌트라는것을 구별함 
        // Food 함수에 전송하기 위함이 아님
        <Food key={dish.id} name={dish.name} picture={dish.image}  rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;