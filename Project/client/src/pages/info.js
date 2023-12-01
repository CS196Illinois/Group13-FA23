import '../App.css';
import InfoCourse from '../components/infocourse';
import InfoGeneral from '../components/infogeneral.js';
import Inforso from '../components/inforso.js';

function Homepg() {
  return (
    <div className="Infopg"> 
     <InfoCourse/>
     <InfoGeneral/>
     <Inforso/>
    </div>
  );
}

export default Homepg;
