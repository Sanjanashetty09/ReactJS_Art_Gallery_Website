import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup"
import Home from "./Home";
import Gallerypage from './Gallerypage';
import Purchase from './Purchase';
import Contact from './Contact';
import About from './About';
import Final from './Final';
function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="gallerypage" element={<Gallerypage/>}/>
      <Route path="purchase" element={<Purchase/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="final" element={<Final/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App;