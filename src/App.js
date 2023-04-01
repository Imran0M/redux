import { useSelector } from 'react-redux';
import './App.css';

function App() {
  const reduxState= useSelector((state)=>state)
  console.log(reduxState)
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
