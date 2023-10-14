import React from 'react';
import "./App.css";
import Button from './component/button';
import Firstpage from './component/firstpage';
import Secondpage from './component/secondpage';
import LoginANDlogout from './component/loginANDlogout';
import Setting from './component/setting';


function App() {
  return (
    <div className="App">  

    
    <Setting />

    
    </div>
  );
}




/*function App() {
 return (
      <main style={{padding:"5px"}}>
      <p style={{ fontWeight: "bold",fontFamily:"sans-serif" }}>
Group 13(name of appl) </p>
      <img alt=""
        style={{ width: "100%" }}
        src='https://pbs.twimg.com/profile_banners/44196397/1576183471/600x200'
      /><style>
      span.a {{
        display: "inline", /* the default for span 
        width: "100px",
        height: "100px",
        border: "1px solid blue",  
        
      }}</style>
      <p>     <span class="a">Aliquam</span> </p>
  
      <img alt=""
       style={{
          width: "150px",
          borderRadius: "50%",
          border: "4px solid white",
          marginTop: "-45px",
        }}
        src='https://pbs.twimg.com/profile_images/1529956155937759233/Nyn1HZWF_400x400.jpg'
      />
      <p style={{ fontWeight: "bold" }}>Elon Musk</p>
      <p style={{ marginTop: "-15px" }}>@elonmusk</p>
      <div style={{ display: "flex" }}>
        <p style={{ margin: "5px",fontWeight: "bold" }}>
          114 <span style={{ fontWeight: "normal" }}>Following</span>
        </p>
        <p style={{ margin: "5px",fontWeight: "bold" }}>
          100.6 M <span style={{ fontWeight: "normal" }}>Followers</span>
        </p>
      </div>
    </main>
  );
}*/





/*const Styles = {
  divStyles: {
    color: "blue",
    backgroundColor: "darkblue",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    padding: "1px",
    margin: "10px",
  },
  pStyles: {
    color: "Black",
    backgroundColor: "white",
    fontSize: "20px",
    fontWeight: "bold",
    textAlign: "center",
    padding: "10px",
    margin: "10px",
  },
};
 
function App() {
  return (
    <div style={Styles.divStyles}>
      <p style={Styles.pStyles}>
        MAJORS
      </p>
      <p style={Styles.pStyles}>
        ACADEMIC YEAR
      </p>
      <p style={Styles.pStyles}>3 Million+ React projects arise in one week </p>
    </div>
  );
}

import Styles from "./App.module.css";
 
export default function App() {
  return (
    <div className={Styles.block}>
      <h2>
        React is a free and open-source front-end JavaScript library for
        building user interfaces based on UI components. It is maintained by
        Meta and a community of individual developers and companies
      </h2>
    </div>
  );
}
 */
export default App;


