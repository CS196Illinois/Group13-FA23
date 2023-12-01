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
          <Route path="/" element={<Homepg />} />
          <Route path="/profile" component={<Profilepg />} />
          <Route path ="/info" component={<Infopg />} />
        </Routes>
    </Router>    

    </div>
  );
}

import Styles from "./App.module.css";
 
export default function App() {
  return (
    <div className={Styles.block}>
      <h2>
        React is a free and open-source front-end JavaScript library for
        building user interfaces based on UI components. It is maintained by
        Meta and a community of individual developers and companies
      </h2>
    </div>
  );
}
 */
export default App;