import logo from './logo.svg';
import './App.css';
import Hello from './component/Hello'; // 사용할려면 import 하면서 경로까지 작성한다. 경로에 .js는 생략가능하다.
import Welcome from './component/Welcome';

function App() {
  return (
    <div className="App">
      {/* <Hello></Hello> 태그 처럼 써주면 된다. 만약 태그처럼 쓰는데 중간에 들어갈 내용이 없다면 아래와 같이 사용가능하다. */}
      <Hello />
      <Welcome />
    </div>
  );
}

export default App;
