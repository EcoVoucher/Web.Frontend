'use client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page';
import PrivateRoute from './PrivateRoute';
import React from 'react';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/inicio-empresas" element={<PrivateRoute auth={null}><Home /></PrivateRoute>} />

            </Routes>
        </Router>
    );
}