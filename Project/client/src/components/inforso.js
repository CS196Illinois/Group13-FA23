import Menu from '../components/menu.js';

function Inforso() {
  <Menu/>
    return (
      <div>
        <div className = "Title">
          <h1>Build Your Profile</h1>
          <p>The information provided will be used to facilitate connections with friends and shared among users! </p>
        </div>
    
        <div className ="containerStyle">
  
          {/* Subject and Number on the same line */} 


          <label htmlFor="RSO">RSO (Registered Student Organization):</label>
          <select id="RSO" name="RSO">
            <option value="Accounting Club">Accounting Club</option>
            <option value="sophomore">Sophomore</option>
            <option value="junior">Junior</option>
            <option value="senior">Senior</option>
            <option value="master">Master's</option>
            <option value="PhD">PhD</option>
            <option value="other">Other</option>
          </select><br />
  
  
        </div>
  
        <div className = "containerStyle">
          <button>submit</button>
        </div>
      </div>
    );
  }
  export default Inforso;
  