import { Routes, Route } from "react-router";
import Topbar from "./components/Topbar";
import Footer from "./components/Footer";
import AddStudents from "./components/AddStudents";
import EditStudents from "./components/EditStudents";
import ManagementContainer from "./components/ManagementContainer";

function App() {
  return (
    <div className="App">
      <Topbar />
      <Routes>
        <Route path="/" element={<ManagementContainer />}/>
        <Route path="/students/add" element={<AddStudents />}/>
        <Route path="/students/edit/:id" element={<EditStudents />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
