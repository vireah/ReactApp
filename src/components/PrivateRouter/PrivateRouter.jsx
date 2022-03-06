import React, {Component} from "react";
import {Route,Outlet , Navigate, Routes, BrowserRouter as Router} from 'react-router-dom'

const PrivateRoute = () => {
    return localStorage.getItem("token") ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;