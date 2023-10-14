function InfoCourse() {
      return (
        <div>
          <div className = "Title">
            <h1>Build Your Profile 2/2</h1>
            <p>The information provided will be used to facilitate connections with friends and shared among users! </p>
            <p>Add Course Reference Number (CRN) using the Add CRN button </p>
            <p>Add RSO (Registered Student Organization) using the Add RSO button </p>
          </div>
      
          <div className ="containerStyle">
    
          {/* Subject and Number on the same line */}
          
          <label htmlFor="crn">CRN:</label>
          <input type="number" id="crn" name="crn" required /><br />
          <input type="number" id="crn" name="crn" required /><br />

    
          </div>
    
          <div className = "containerStyle">
            <button>Add CRN</button><br />
          </div>

          <div className ="containerStyle">
  
          {/* Subject and Number on the same line */} 


            <label htmlFor="RSO">RSO (Registered Student Organization):</label>
            <select id="RSO" name="RSO">
              <option value="Accounting Club">Accounting Club</option>
              <option value="Acoustics at the University of Illinois">Acoustics at the University of Illinois</option>
              <option value="Acts Campus Ministry at UIUC">Acts Campus Ministry at UIUC</option>
              <option value="Actually Neurodivergent">Actually Neurodivergent</option>
              <option value="Actuarial Science Club">Actuarial Science Club</option>
              <option value="Aerospace Engineering Graduate Student Advisory Committee">Aerospace Engineering Graduate Student Advisory Committee</option>
              <option value="other">Other</option>
            </select><br />
          </div>

          <div className = "containerStyle">
            <button>Add CRN</button><br />
          </div>

          <div className = "containerStyle">
            <button>submit your information</button>
          </div>

        </div>
      );
    }
    export default InfoCourse;





// function InfoCourse() {
//     return (
//       <div>
//         <div className = "Title">
//           <h1>Build Your Profile</h1>
//           <p>The information provided will be used to facilitate connections with friends and shared among users! </p>
//         </div>
    
//         <div className ="containerStyle">
  
//           {/* Subject and Number on the same line */}
//           <div className = "inputGroupStyle">
//             <label htmlFor="subject">Subject:</label>
//             <input type="text" id="subject" name="subject" required />
//             <label htmlFor="number" className = "LabelStyle" >Number:</label>
//             <input type="number" id="number" name="number" required /><br />
//           </div>

//           <div className = "inputGroupStyle">
//             <label htmlFor="subject">Subject:</label>
//             <input type="text" id="subject" name="subject" required />
//             <label htmlFor="number" className = "LabelStyle" >Number:</label>
//             <input type="number" id="number" name="number" required /><br />
//           </div>

//           <div className = "inputGroupStyle">
//             <label htmlFor="subject">Subject:</label>
//             <input type="text" id="subject" name="subject" required />
//             <label htmlFor="number" className = "LabelStyle" >Number:</label>
//             <input type="number" id="number" name="number" required /><br />
//           </div>

//           <div className = "inputGroupStyle">
//             <label htmlFor="subject">Subject:</label>
//             <input type="text" id="subject" name="subject" required />
//             <label htmlFor="number" className = "LabelStyle" >Number:</label>
//             <input type="number" id="number" name="number" required /><br />
//           </div>


//           <div className = "inputGroupStyle">
//             <label htmlFor="subject">Subject:</label>
//             <input type="text" id="subject" name="subject" required />
//             <label htmlFor="number" className = "LabelStyle" >Number:</label>
//             <input type="number" id="number" name="number" required /><br />
//           </div>


//           <div className = "inputGroupStyle">
//             <label htmlFor="subject">Subject:</label>
//             <input type="text" id="subject" name="subject" required />
//             <label htmlFor="number" className = "LabelStyle" >Number:</label>
//             <input type="number" id="number" name="number" required /><br />
//           </div>
  
//         </div>
  
//         <div className = "containerStyle">
//           <button>next</button>
//         </div>
//       </div>
//     );
//   }
//   export default InfoCourse;
