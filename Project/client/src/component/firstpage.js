import '../App.css';

const Styles = {
    divStyles: {
      fontSize: "20px",
      fontWeight: "bold",
      textAlign: "center",
      padding: " 50px",
    },
    pStyles: {
      color: "white",
      backgroundColor: "#13294B",
      fontSize: "20px",
      fontFamily: "conthrax",
      fontWeight: "bold",
      textAlign: "center",
      padding: "50px",
      margin: "50px",
      //width: "400px",
    },
    p3Styles: {
      color: "white",
      backgroundColor: "#13294B",
      fontSize: "20px",
      fontFamily: "conthrax",
      fontWeight: "bold",
      textAlign: "center",
      padding: "50px",
      margin: "80px",
      width: "400px",
    },
    titleStyles: {
      color: "white",
      fontSize: "30px",
      fontFamily: "conthrax",
      fontWeight: "bold",
      textAlign: "center",
   
    }
  };
  function Firstpage() {
    return (
      <div style={Styles.divStyles}>
        <p style={Styles.titleStyles}>
         General Categories
        </p>
        {<p style={Styles.pStyles}>MAJORS </p> }
        {/* <button className="backbutton">Back</button>  */}

    
        <p style={Styles.pStyles}>ACADEMIC YEAR </p>
        

      <p style={Styles.pStyles}>COURSES </p>
      <p style={Styles.pStyles}>
         RSO
        </p>
        <p style={Styles.pStyles}>
        LOCATION
      </p>
      <p style={Styles.pStyles}>GENDER </p>
      <p style={Styles.pStyles}>
         HOMETOWN
        </p>
        <p style={Styles.pStyles}>
        PREFERENCE
      </p>
      </div>
      
    );
  }

export default Firstpage;