import '../App.css';
import Signinbutton from '../components/signin';
import Title from '../components/title.js';

function Homepg() {
  return (
    <div className="Homepg"> 
     <Title/>
     <Signinbutton/>
    </div>
  );
}

export default Homepg;
