import { Suspense, useContext, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPAge/MainPage.async';
import { useTheme } from './theme/useTheme';


const App = () => { 
    const {theme, toggleTheme} = useTheme();
    return ( 
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>TOOGLE</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                </Routes> 
            </Suspense>
        </div>
    )
}

export default App;