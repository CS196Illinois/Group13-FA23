import '../App.css';

const Gender1 = () => {
  return (
     

    <div style={Styles.div2Styles}>
    <p style={Styles.title}>
     Gender
     </p> 
  <p style={Styles.p0Styles}>
     GroupChat
     </p>
     {/* <div className="userbutton">
  <button>Users</button>
     </div> */}
  

     <div style={Styles.div5Styles}>
    
     <p>User: xxx
     </p>
     <p>User2: .......
     </p>
     </div>
    <div style={Styles.div4Styles}>
    
    <button className="backbutton">Back</button>  
      <button className="nextbutton">Next</button>
  </div>
  </div>
);
  }
 
const Styles = {

    divStyles: {
      //backgroundColor:"#C84113",
      fontSize: "20px",
      fontWeight: "bold",
      padding: "20px",
    },
    title: {
 
      textAlign: "center",
      color: "white",

      textAlign: "center",
      fontFamily: "conthrax",
      fontSize: "30px",
    },
    div2Styles: {
      color: "#13294B",
      fontSize: "30px",
      fontWeight: "bold",
      textAlign: "center",
      color: "white",
      fontFamily: "conthrax",
    },
    div3Styles: {
      paddingLeft: "1000px",
    },
    div4Styles: {
      paddingTop: "300px",
      paddingBottom: "20px",
    },
    div5Styles: {
      textAlign: "center",
      color: "white",
      margin: "100px 250px",
      textAlign: "left",
      fontFamily: "conthrax",
    },
    p0Styles: {
      color: "white",
    
      fontSize: "20px",
      fontFamily: "conthrax",
      fontWeight: "bold",
      textAlign: "center",
 
    
    },
    pStyles: {
      color: "white",
      backgroundColor: "#13294B",
      fontSize: "20px",
      fontFamily: "conthrax",
      fontWeight: "bold",
      textAlign: "center",
    },
    p2Styles: {
      color: "white",
      backgroundColor: "#C84113",
      fontSize: "20px",
      fontFamily: "conthrax",
      fontWeight: "bold",
      textAlign: "center",
      padding: "10px",
      width: "300px",
    },
  };

export default Gender1;