
import './App.css'
import CustomNavbar from "./components/Navbar";

export interface LienTypes {
    name : string,
    path : string
}



const links : LienTypes[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Project",
    path: "/project",
  }
];

function App() {


  return (
    <div className="App">
      <CustomNavbar
          title="Mon application"
          links={links}
          closeIcon={<p>Close</p>}
     />
    </div>
  )
}

export default App
