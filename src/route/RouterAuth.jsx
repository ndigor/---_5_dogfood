import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const RouterAuth = (props) => {
    return (
        <Routes>
            <Route path="/" element={<div>NOT auth 404</div>} />
        </Routes>
    );
};


