import './css/App.css';
import './css/all.min.css'
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import SecondPage from './Component/SecondPage'
import StillinProgress from './Component/StillinProgress';
import Aboutpage from './Component/About';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<SecondPage/>}></Route>
                {/* <Route path='/MyDesign' element={<SecondPage/>}></Route> */}
                <Route path='/About-us' element={<Aboutpage/>}></Route>

                <Route  path={'*'} element={<StillinProgress />}></Route>
                

            </Routes>
        </Router>
    );
}

export default App;



