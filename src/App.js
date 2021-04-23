import './css/App.css';
import './css/all.min.css'
import {BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import MainPage from './Component/MainPage'
import SecondPage from './Component/SecondPage'
import StillinProgress from './Component/StillinProgress';
function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainPage/>}></Route>
                <Route path='/MyDesign' element={<SecondPage/>}></Route>
                <Route  path={'*'} element={<StillinProgress />}></Route>
                

            </Routes>
        </Router>
    );
}

export default App;



