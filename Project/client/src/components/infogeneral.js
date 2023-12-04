import Menu from '../components/menu.js';
import InfoCourse from './infocourse.js';

function InfoGeneral() {

    return (
      <div>
          <Menu/>
        <div className = "Titleinfo">
          <h1>Build Your Profile 1/2</h1>
          <p>The information provided will be used to facilitate connections with friends and shared among users! </p>
        </div>
    
        <div className ="containerStyle">
          <br />
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required /><br /><br />
  
          <label htmlFor="gender">Pronouns:</label>
          <select id="gender" name="gender">
            <option value="He/Him/His">He/Him/His</option>
            <option value="She/Her/Hers">She/Her/Hers</option>
            <option value="They/Them/Theirs">They/Them/Theirs</option>
            <option value="Ze/Hir/Hirs">Ze/Hir/Hirs</option>
            <option value="Xe/Xem/Xyrs">Xe/Xem/Xyrs</option>
            <option value="Other (please specify)s">Other</option>
          </select><br /><br />
  
          <label htmlFor="year">Year:</label>
          <select id="year" name="year">
            <option value="freshman">Freshman</option>
            <option value="sophomore">Sophomore</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
            <option value="master">Master's</option>
            <option value="PhD">PhD</option>
            <option value="other">Other</option>
          </select><br /><br />
  
          <label htmlFor="major">Major:</label>
          <input type="text" id="major" name="major" required />

          <div className = "containerStyle">
            <button>Add Major</button><br /><br />
          </div>
  
          <label htmlFor="minor">Minor:</label>
          <input type="text" id="minor" name="minor" required />

          <div className = "containerStyle">
            <button>Add Minor</button><br /><br />
          </div>
  
          <label htmlFor="residence">Residence:</label>
          <input type="text" id="residence" name="residence" /><br />  
  
        </div>
  
        <div className = "containerStyle">
          <button onClick={InfoCourse}>next</button><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>
    );
  }
  //label: for form controls. 
  //for: for attribute is used to associate the label with a specific input element. 
  //content of the label.
  //type
  //identifier
  //name of the element
  
  export default InfoGeneral;
  