import '../App.css';

const Styles = {
    divStyles: {
      //backgroundColor: "#C84113",
      fontSize: "20px",
      fontWeight: "bold",
      textAlign: "center",
      padding: "50px",
    },
    pStyles: {
      color: "white",
      backgroundColor: "#13294B",
      fontSize: "20px",
      fontWeight: "bold",
      textAlign: "center",
      padding: "50px",
      margin: "80px",
    },
  };
  function Firstpage() {
    return (
      <div style={Styles.divStyles}>
        <p style={Styles.pStyles}>
         MAJORS
        </p>
        <p style={Styles.pStyles}>
        ACADEMIC YEAR
      </p>
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