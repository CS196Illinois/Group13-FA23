import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profilepg from './pages/profilepg';
import Homepg from './pages/homepg';
import Infopg from './pages/info';
import Firstpage from './pages/firstpage.js'
import Secondpage from './pages/secondpage.js'
import InfoGeneral from './components/infogeneral.js';
import InfoCourse from './components/infocourse.js';

//import Signinbutton from './components/signin.js';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepg />} />
          <Route path="/profile" element={<Profilepg />} />
          <Route path ="/info" element={<Infopg />} />
          <Route path="/categories" element={<Firstpage />} />
          <Route path="/chat" element={<Secondpage />} />
          <Route path="/signup" element={< InfoGeneral />} />
          <Route path="/signup2" element={< InfoCourse />} />
        </Routes>
    </Router>    

    </div>
  );
}

export default App;

/* 
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