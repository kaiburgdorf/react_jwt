import './App.css';
import LoginPanel from './LoginPanel';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/dashboard">Dashboard</Link>
      </nav>
     <LoginPanel></LoginPanel>
    </div>
  );
}

export default App;
