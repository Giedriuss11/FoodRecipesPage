import './App.css';
import Registration from "./userLogPages/Registration";
import Login from "./userLogPages/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
