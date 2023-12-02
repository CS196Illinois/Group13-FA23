import '../App.css';
import InfoCourse from '../components/infocourse';
import InfoGeneral from '../components/infogeneral.js';
import Inforso from '../components/inforso.js';
import Menu from '../components/menu.js';

function Homepg() {
  return (
    <div className="Infopg"> 
      <Menu/>
     <InfoCourse/>
    </div>
  );
}

export default Homepg;
