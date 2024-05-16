import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter } from "react-router-dom";
import { CarritoProvider } from "./context.jsx";
function App() {
  
  return (
    <BrowserRouter>
      <CarritoProvider>
        <Header/>
        <Main/>
        <Footer/>
      </CarritoProvider>
    </BrowserRouter>
  )
}

export default App;
