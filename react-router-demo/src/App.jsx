import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Firstpage from './component/firstpage';
import Secondpage from './component/secondpage';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';

const Firstpage = () => {
  return <div>Firstpage</div>
}
const Secondpage = () => {
  return <div>Secondpage</div>
}


function App() {
  const [count, setCount] = useState(0)

  return <BrowserRouter>
  <Routes>
    <Route
    element={<>
    <Link to="/generalcategories">???</Link>
    <Link to="/csgroupchat">Majors</Link>
  <Outlet />
  </>
  }
    >
    </Route>
  </Routes>
  </BrowserRouter>
}

export default App
