import '../App.css';
import Profile from '../components/profiles.js';
import Picture from '../components/picture.js';
import Animation from '../components/animation.js';
import Oops from '../components/oops';
//import Signinbutton from './components/signin.js';

function Profilepg() {
  return (
    <div className="Profilepg">
    <Profile/>
    <Picture/>
    <Animation/>
    <Oops/>
    </div>
  );
}

export default Profilepg;
