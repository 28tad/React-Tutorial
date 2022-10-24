import { Suspense, useContext, useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/config/lib/classNames/classNames';
import { AboutPage } from 'pages/AboutPage';
import MainPage from 'pages/MainPAge/ui/MainPage';

const App = () => { 
    const {theme, toggleTheme} = useTheme();
    return ( 
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOOGLE</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes> 
            </Suspense>
        </div>
    )
}

export default App;