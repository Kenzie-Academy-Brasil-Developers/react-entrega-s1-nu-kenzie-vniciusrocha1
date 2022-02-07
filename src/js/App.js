import { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import LandingPage from '../components/LandingPage';
import '../css/App.css';
const App = () => {
    const [screen,setScreen] = useState('LandingPage');
    return (
        <div className="app">
            {(screen === 'LandingPage')? (<LandingPage setScreen={setScreen}/>):(<><Header setScreen={setScreen}/><Main/></>)}
        </div>
    );
}
export default App;