import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PublicRoutes from './PublicRoutes';

const AppNavigation: React.FC = () => {
    return (
        <Router>
            <Routes>
                {PublicRoutes.map((route, i) => {
                    return <Route key={i} {...route}/>
                })}
            </Routes>
        </Router>
    )
}

export default AppNavigation;