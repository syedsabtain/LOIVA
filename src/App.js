import './css/App.css';
import './css/all.min.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import MainPage from './Component/MainPage'
import SecondPage from './Component/SecondPage'
function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' ><MainPage/></Route>
                <Route path='/MyDesign' ><SecondPage/></Route>

            </Routes>
        </Router>
    );
}

export default App;
