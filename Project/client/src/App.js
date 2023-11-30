import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from './components/menu.js';
import Profilepg from './pages/profilepg';
import Homepg from './pages/homepg';
import Infopg from './pages/info';
//import Signinbutton from './components/signin.js';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" component={<Homepg />} />
          <Route path="/profile" component={<Profilepg />} />
          <Route path ="/info" component={<Infopg />} />
        </Routes>
    </Router>    

    </div>
  );
}

export default App;