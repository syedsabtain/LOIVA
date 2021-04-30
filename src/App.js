import './css/App.css';
import './css/all.min.css'
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import SecondPage from './Pages/SecondPage'
import StillinProgress from './Pages/StillinProgress';
import Aboutpage from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Service';
function App() {
    return (
       
            <Router>
            <Routes>
                <Route path='/' element={<SecondPage/>}></Route>
                <Route path='/Services' element={<Services/>}></Route>
                <Route path='/About-us' element={<Aboutpage/>}></Route>
                <Route path='/Contact' element={<Contact/>}></Route>


                <Route  path={'*'} element={<StillinProgress />}></Route>
                

            </Routes>
        </Router>
        
        
    );
}

export default App;



