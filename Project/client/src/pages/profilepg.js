import '../App.css';
import Profile from '../components/profiles.js';
import Picture from '../components/picture.js';
import Animation from '../components/animation.js';
import Oops from '../components/oops';
import Menu from '../components/menu.js';
//import Signinbutton from './components/signin.js';

function Profilepg() {
  return (
    <div className="Profilepg">
    <Menu/>
    <Profile/>
    <Picture/>
    <Animation/>
    <Oops/>
    </div>
  );
}

export default Profilepg;
