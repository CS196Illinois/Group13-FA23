function InfoCourse() {
      return (
        <div>
          <div className = "Title">
            <h1>Build Your Profile 2/2</h1>
            <p>The information provided will be used to facilitate connections with friends and shared among users! </p>
            <p>Add Course Reference Number (CRN) using the Add CRN button </p>
            <p>Add RSO (Registered Student Organization) using the Add RSO button </p>
          </div><br /><br />
      
          <div className ="containerStyle">
    
          {/* Subject and Number on the same line */}
          
          <label htmlFor="crn">CRN:</label>
          <input type="number" id="crn" name="crn" required />
          {/* <input type="number" id="crn" name="crn" required /><br />
          <input type="number" id="crn" name="crn" required /><br />
          <input type="number" id="crn" name="crn" required /><br /> */}

    
          </div>
    
          <div className = "containerStyle">
            <button>Add CRN</button><br /><br /><br />
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
              <option value="African Cultural Association">African Cultural Association</option>
              <option value="a">African Students Organization</option>
              <option value="b">Afrique Dance Ensemble</option>
              <option value="c">Agricultural and Consumer Economics - Graduate Student Organization</option>
              <option value="d">AI @ UIUC</option>
              <option value="e">Airsoft at Illinois</option>
              <option value="f">Alive Vineyard College Ministry</option>
              <option value="g">ALPFA Illinois</option>
              <option value="h">Alpha Chi Omega</option>
              <option value="i">Alpha Chi Rho</option>
              <option value="j">Alpha Chi Sigma</option>
              <option value="k">Alpha Delta Phi Fraternity</option>
              <option value="l">Alpha Delta Pi</option>
              <option value="m">Alpha Epsilon Delta Pre-Health Society</option>
              <option value="n">Alpha Epsilon Phi Sorority</option>
              <option value="o">Alpha Epsilon Pi</option>
              <option value="p">Alpha Gamma Delta</option>
              <option value="q">Alpha Gamma Rho</option>
              <option value="r">Alpha Investment Management Partners</option>
              <option value="s">Alpha Kappa Alpha Sorority, Incorporated. Gamma Chapter</option>
              <option value="t">Alpha Kappa Delta Phi</option>
              <option value="u">Alpha Kappa Psi Professional Business Fraternity</option>
              <option value="v">Alpha Omega Campus Ministry</option>
              <option value="w">Alpha Omega Epsilon Engineering Sorority</option>
              <option value="x">Alpha Omicron Pi</option>
              <option value="y">Alpha Phi Alpha Fraternity, Incorporated</option>
              <option value="z">Alpha Phi Gamma National Sorority, Inc.</option>
              <option value="aa">Alpha Phi International Sorority</option>
              <option value="ab">AAlpha Phi Omega</option>
              <option value="ac">Alpha Pi Sigma Sorority, Incorporated. - Xi Chapter</option>
              <option value="ad">AAlpha Psi Lambda</option>
              <option value="qd">Alpha Rho Chi</option>
              <option value="wd">AAlpha Sigma Phi Fraternity</option>
              <option value="ed">Alpha Tau Alpha/Ag Ed Club</option>
              <option value="rd">Alpha Tau Omega: Gamma Zeta</option>
              <option value="td">Alpha Xi Delta</option>
              <option value="dy">Alpha Zeta Fraternity, Morrow Chapter</option>
              <option value="du">Altgeld Ringers</option>
              <option value="di">Amateur Artists of Illustration</option>
              <option value="do">AAmerican Advertising Federation at the University of Illinois</option>
              <option value="dp">American Association for Aerosol Research at UIUC</option>
              <option value="da">American Association of Zoo Veterinarians, Illinois Student Chapter</option>
              <option value="ds">American Cancer Society On Campus</option>
              <option value="dd">American Chemical Society</option>
              <option value="df">American Choral Directors Association University of Illinois Student Chapter</option>
              <option value="dg">American Concrete Institute</option>
              <option value="dv">American Constitution Society</option>
              <option value="dqd">American Institute of Architecture StudentsC</option>
              <option value="dwr">American Institute of Chemical Engineers</option>
              <option value="dw1">American Library Association Student Chapter at the University of Illinois, Urbana-Champaign</option>
              <option value="d21">American Marketing Association</option>
              <option value="d13">American Medical Student Association Pre-Med</option>
              <option value="d14">American Medical Women's Association at UIUC</option>
              <option value="d15">AAmerican Nuclear Society, University of Illinois Student Section</option>
              <option value="d16">American Railway Engineering and Maintenance-of-Way Association Student Chapter at UIUC</option>
              <option value="d17">American Red Cross Club at the University of Illinois at Urbana Champaign</option>
              <option value="d18">American Sign Language & Deaf Culture Club</option>
              <option value="d19">American Society for Biochemistry and Molecular Biology Student Chapter at UIUC</option>
              <option value="d20">American Society of Agricultural and Biological Engineers</option>
              <option value="d21">American Society of Civil Engineers</option>
              <option value="d22">American Society of Mechanical Engineers</option>
              <option value="d23">American String Teachers Association</option>
              <option value="d24">Amnesty International 124</option>
              <option value="d25">Among Us Club</option>
              <option value="d26">Animal Welfare Club</option>
              <option value="d27">Anthropology Club/Lambda Alpha</option>
              <option value="d28">Among Us Club</option>
              <option value="d29">Animal Welfare Club</option>
              <option value="d30">Anthropology Club/Lambda Alpha</option>
              <option value="d31">Arab American Association of Engineers and Architects</option>
              <option value="dd31">Arab Student Association</option>
              <option value="oed31ther">Archery Club</option>
              <option value="dr31">Armchair Detectivesb</option>
              <option value="orthd31er">Armenian Students' Cultural Association</option>
              <option value="dg31">Army ROTC Cadet Council</option>
              <option value="dh31">Arnold Air Society - Jake Schaefer Squadron</option>
              <option value="d1331">Arpeggia</option>
              <option value="d32331">Ascend UIUC Chapter</option>
              <option value="d3431">Asha for Education: Urbana-Champaign</option>
              <option value="d5331">Asian American Association</option>
              <option value="d6331">Asian American Journalists Association</option>
              <option value="d78331">Asian Law Students Association</option>
              <option value="d3f31">Asian Pre-Law Association</option>
              <option value="dd331">Association for Computing Machinery</option>
              <option value="d3c31">Association for Information Systems</option>
              <option value="dw331">Association for Quantitative Trading Education</option>
              <option value="d3r31">Association of Asian Veterinary Medical Professionals at Illinois (AAVMP)</option>
              <option value="d2331">Association of Food Technologists</option>
              <option value="d3431">Association of Healthcare Technology Engineering</option>
              <option value="d331">Association of Minorities in Political Science</option>
              <option value="o4trher">Astronomical Society at the University of Illinois at Urbana-Champaign</option>
              <option value="oet4hrer">Avicenna Community Health Center Student Initiative</option>
              <option value="sot5her">AWS Cloud Club - UIUC</option>
              <option value="ot1h4er">AAxisMED</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className = "containerStyle">
            <button>Add RSO</button><br /><br /><br />
          </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

          <div className = "containerStyle">
            <button>submit your information</button><br /><br /><br />
          </div><br />

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
