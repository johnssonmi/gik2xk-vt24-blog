import { Link, Outlet } from "react-router-dom"

function App() {
  
  return (
    <>
    <ul>
      <li>
        <Link to="/">Blogg</Link>
      </li>
      <li>
        <Link to="/posts/new">Skapa inlägg</Link>
      </li>
    </ul>
    <Outlet />
    </>
  )
}

export default App
