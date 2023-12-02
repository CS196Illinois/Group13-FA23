import '../App.css';
import Signinbutton from '../components/signin';
import Title from '../components/title.js';
import Menu from '../components/menu.js';

function Homepg() {
  return (
    <div className="Homepg"> 
     <Menu/>
     <Title/>
     <Signinbutton/>
    </div>
  );
}

export default Homepg;
