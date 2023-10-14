import '../App.css';
const Styles = {
    divStyles: {
      backgroundColor: "#13294B",
      padding: "10px",
    },
    pStyles: {
      color: "white",
      backgroundColor: "#white",
      fontSize: "10px",
      fontWeight: "bold",
      textAlign: "right",
      padding: "10px",
    },
  };
function LoginANDlogout() {
    return (
      <div style={Styles.divStyles}>
        <p style={Styles.pStyles}>
        Log in/Log out
      </p>
      </div>
      
    );
  }

export default LoginANDlogout;