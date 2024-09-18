import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import MainHome from './Layouts/MainHome';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import ContactUs from './Components/ContactUs';



function App() {
  return (
    <div>
        

<Router>
<Routes>
    <Route path="/" element={<Login />} />
    <Route path="/Home" element={<MainHome />} >
    <Route path='AboutUs' element={<AboutUs/>}/>
    <Route path='Services' element={<Services/>}/>
    <Route path='ContactUs' element={<ContactUs/>}/>
    </Route>

</Routes>
</Router>
    </div>
  );
}

export default App;
