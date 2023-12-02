import '../App.css';

const Secondpage = () => {
    return (
       /*<div style={Styles.divStyles}>
        <p style={Styles.pStyles}>
         GroupChat
         <div>
      <button type="button">Show More Members</button>
      </div>
        </p>
        <div style={Styles.div2Styles}>
        
        <p style={Styles.p2Styles}>
         related major
        </p>
        <p style={Styles.p2Styles}>
         related major
        </p>
        <p style={Styles.p2Styles}>
         related major
        </p>
        <p style={Styles.p2Styles}>
         Explore More Majors
        </p>
        </div>
      </div> */
      <div style={Styles.divStyles}>
        <div style={Styles.div2Styles}>
      <p>
         GroupChat
         <div style={Styles.div3Styles}>
         <button type="button">Show More Members</button>
         </div>
         </p>
         </div>
         <div style={Styles.div5Styles}>
         <p>User: xxx
         </p>
         <p>User2: .......
         </p>
         </div>
         <div style={Styles.div4Styles}>
       
          <div style={{float: 'left'}}>
         <button type="button">Back</button>
        </div>
      
         <div style={{float: 'right'}}>
         <button type="button">Next</button>
        </div>

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
    div2Styles: {
      fontSize: "20px",
      fontWeight: "bold",
      textAlign: "center",
      color: "white",
    },
    div3Styles: {
      paddingLeft: "1000px",
    },
    div4Styles: {
      paddingTop: "500px",
    },
    div5Styles: {
      textAlign: "center",
      color: "white",
      margin: "100px 250px",
      textAlign: "left",
    },
    pStyles: {
      color: "white",
      backgroundColor: "#13294B",
      fontSize: "20px",
      fontWeight: "bold",
      textAlign: "center",
    },
    p2Styles: {
      color: "white",
      backgroundColor: "#C84113",
      fontSize: "15px",
      fontWeight: "bold",
      textAlign: "center",
      padding: "10px",
      width: "300px",
    },
  };

export default Secondpage;