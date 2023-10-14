import '../App.css';

const Styles = {
    divStyles: {
      color: "white",
      fontSize: "20px",
      fontWeight: "bold",
      textAlign: "left",
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
  function Setting() {
    return (
      <div style={Styles.divStyles}>

        <p>
         Brightness
        </p>
        <p>
        Sound
      </p>
      <p>
         Show My Birthday
        </p>
        <p>
        Show My Gender
      </p>
      <p>
         Show My Profile        
         </p>
      </div>
      
    );
  }

export default Setting;