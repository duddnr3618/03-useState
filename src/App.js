import {useState} from 'react';

// useState : 상태 (JSX에 적용될 데이터)

function App() {

  let name = 'World';

  // 숫자를 저장하는 state 변수
  // state 값이 변경이 되면 컴포넌트는 자동으로 렌더링 된다.
  // 가상돔에 생성된 엘리멘트는 수정되지 않는다 -> 새롭게 생성
  const [number, setNumber] = useState(0);
  const [numberStyle , setNumberStyle] = useState({color:"blue"});

  // 함수 생성 3가지 방법 (ES6 부터는 화살표 함수를 많이 사용함)
  let clickEventHandler = () => { console.log("함수 호출 성공");

  // 랜덤한 값을 출력하는 함수 ( 0 ~ 1 사이의 랜덤한 값을 생성)
  let num = Math.random() * 100;
  // 소수점 이하 절삭 : Math.floor()
  num = Math.floor(num);
  console.log(num);

  // 양수이면 파란색으로 numberStyle 변수의 값을 파란색으로 처리 -> setter를 사용해서 (useState)변수의 값을 변경
  setNumberStyle({color:"blue"});

  // 음수 일때 빨간색으로 적용
  // let num2 = Math.floor(Math.random() * 2);
  if (Math.floor (Math.random()*2)) {
    num = -num;
    setNumberStyle({color:"red"});
    console.log(num);
  }

  // 클릭시 상태를 업데이트 -> 상태 업데이트 시 랜더링이 자동으로 된다.
  setNumber (num);


  }

  // number 변수의 값이 양수이면 파란색으로 출력 , 음수이면 빨간색으로 출력
  return (
    <div className = "App">
      <h1>Hello , {name} </h1>
      <p style={numberStyle}>Number : {number} </p>
      <button onClick = {clickEventHandler}>Click me !!</button>

      <div style={{color:"red"}}>스타일 적용</div>

    </div>
  );
}

export default App;
