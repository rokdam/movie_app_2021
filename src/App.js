import React from 'react';

//App은 react의 컴포넌트가 됨.
//React.component에서 확장했기 때문에 react component로부터 모든 것을 가져오게 됨
class App extends React.Component{

  //js가 불러와질 때 가장 먼저 호출되는 함수(react X)
  constructor(props){
    super(props);
    console.log("첫번째");
  }

  state = {
    count : 0
  };
  
  //js code function
  add = () => {
    //this.state.count는 좋지는 않음. state에 의존하고 싶지 않음. 성능 문제가 있음!!
    // this.setState({count: this.state.count+1});
    //state를 set 할 때, 외부의 state에 의존하지 않는 가장 좋은 방법임 current쓰기!
    this.setState( current => ({count: current.count+1}));
;  };
  minus = () => {
    this.setState({count: this.state.count-1});
    console.log("minus");
  };

  //mount됐다고 알려주는 함수
  componentDidMount(){
    console.log("component rendered");
  }

  //componentWillUnmount는 컴포넌트가 떠날 때 호출되는 함수임
  //그렇기 때문에 안에 내용을 작성해도 콘솔에는 뜨지 않네ㅜ;
  // componentWillUnmount{
  // }

  //update작업을 하고 나서 update됐다고 알려주는 함수
  componentDidUpdate(){
    console.log("I just updated");
  }

  render(){
    console.log("I am rendering");
    return <div> 
        <h1>The number is : {this.state.count} </h1>
        <button onClick={this.add}> Add</button>
        <button onClick={this.minus}> Minus </button>
      </div>
  }

  
}

export default App;