import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './components/menu.js';
import Profilepg from './pages/profilepg';
import Homepg from './pages/homepg';
//import Signinbutton from './components/signin.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" component={<Menu />} />
          <Route path="/home" component={<Homepg />} />
          <Route path="/profile" component={<Profilepg />} />
        </Routes>
    </Router>    

    </div>
  );
}

export default App;
