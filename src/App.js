import React from 'react';

//App은 react의 컴포넌트가 됨.
//React.component에서 확장했기 때문에 react component로부터 모든 것을 가져오게 됨
class App extends React.Component{
  state = {
    isLoading : true,
    movies: [] // 미래에 있을 수도 있는 것에 대한 선언, 처음부터 선언할 필요는 없지만 좋은 습관! 
  };
  
  //render되고 가장 먼저 불려지는 함수
  componentDidMount(){
    setTimeout(()=>{
        this.setState({isLoading: false});
    }, 6000);
  }
  
  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading...":"We are ready"}</div>;
  }
}

export default App;