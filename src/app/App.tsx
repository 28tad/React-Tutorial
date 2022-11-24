import { Link } from 'react-router-dom';
import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import AppRouter from './providers/router/ui/AppRouter';
import { Navbar } from 'widgets';

const App = () => { 
    const {theme, toggleTheme} = useTheme();
    return ( 
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>TOOGLE</button>
            <AppRouter />
        </div>
    )
}

export default App; 