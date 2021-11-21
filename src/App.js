
  import {Navbar} from "./components/Navbar";
  import {Form} from "./components/Form";
  import {Sidebar} from "./components/Sidebar";
  import {Footer} from "./components/Footer";


function App() {
  return (
    <div className="App">
        <Navbar />
        <div style = {{display: "grid", flexWrap : "wrap", width: "100%", gridTemplateColumns: "20% 80%"}}>
          <Sidebar />
          <Form />
        </div>
        <Footer />
        
    </div>
  );
}

export default App;
