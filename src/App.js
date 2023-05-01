import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './routeLayouts/MainLayout';


const App = () => {
    return (
        <Routes>
            <Route path="/" indexs element={<MainLayout />}>
            </Route>
        </Routes>
    );

}

export default App;