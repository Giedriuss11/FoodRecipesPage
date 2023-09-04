import './App.css';
import Registration from "./userLogPages/Registration";
import Login from "./userLogPages/Login";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RecepiesPage from "./pages/AllRecepies.jsx"
import UploadRec from "./pages/UploadRec.jsx"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/registration" element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path='/' element={<RecepiesPage/>}/>
            <Route path='Upload_recepies' element={<UploadRec/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
