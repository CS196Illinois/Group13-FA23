import { Link } from 'react-router-dom';

function Menu() {
    return (
        
      <div className="Menu">
       <nav>
        hello world
        <Link to="/">Home</Link>
        <Link to="/about">Profile</Link>
        </nav>
      </div>
    );
  }

export default Menu;