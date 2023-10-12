import './App.css';
import Button from './components/button.js';
import Card from './components/card.js';
import Signinbutton from './components/signin';
import Title from './components/title.js';
import Background from './components/background.js';
import Profile from './components/profiles.js';
import Picture from './components/picture.js';
//import Signinbutton from './components/signin.js';

function App() {
  return (
    <div className="App">
     <Title/>
     <Signinbutton/>
     <Profile/>
    <Picture/>
    </div>
  );
}

export default App;
