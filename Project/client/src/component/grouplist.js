
function Grouplist() {
    return (
      <div style={Styles.totalbox}> 
      <p style={Styles.title}>Majors</p>
      <div style={Styles.bigtext}>
      <p style={Styles.text}>Your Major: CS</p>
      <p style={Styles.text}>Related Major: Math</p>
      <p style={Styles.text}>Statistics</p>
      <p style={Styles.text}>ECE</p>
      <p style={Styles.text}>Physics</p>
      <p style={Styles.text}>...</p>
      </div>
      </div>
      
    );
  }
  const Styles = {
    totalbox: {
textAlign: "center",
colors: "white",
    },
    title: {
      color: "white",
      fontSize: "30px",
      fontWeight: "bold",
      textAlign: "center",
      padding: " 50px",
      fontFamily: "conthrax",
    },
    text: {
        color: "white",
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#13294B",
      
        fontFamily: "conthrax",
        width: "400px",
        height: "50px",
        paddingTop: "20px",
      },
      bigtext: {
        color: "white",
        fontWeight: "bold",
        paddingLeft: "500px",

        fontFamily: "conthrax",
      },
}

export default Grouplist;