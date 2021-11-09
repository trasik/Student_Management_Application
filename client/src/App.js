import ManagementCards from "./components/ManagementCards";
import ManagementContainer from "./components/ManagementContainer";
import Topbar from "./components/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <ManagementCards />
      <ManagementContainer />
    </div>
  );
}

export default App;
