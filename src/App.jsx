import Navbar from "./Navbar";
import Homepage from "./Home";
import Create from "./create";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
