import logo from './logo.svg';
import Header from './MainCompent/Header';
import { Outlet } from "react-router-dom";
import Footer from './MainCompent/Footer';
import "./app.css"

function App() {
  return (
    <div className="App">
      <div>
        <div className="header_background bg-dark" >
          <Header></Header>
        </div>
  
        <div style={{ padding: '5px', minHeight: '80vh' }}>
            <Outlet></Outlet>
        </div>
        <div className="header_background">
          <Footer></Footer>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
