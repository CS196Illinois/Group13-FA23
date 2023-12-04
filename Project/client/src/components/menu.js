import { Link } from 'react-router-dom';

function Menu() {
    return (
        
      <div className="Menu">
       <nav>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/signup">Sign up</Link>
        </nav>
      </div>
    );
  }

export default Menu;