import React, {useState, Fragment, createContext} from 'react';
import { Provider } from 'react-redux';

import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Registration from "./components/Courses/components/Registration/Registration";
import Courses from "./components/Courses/Courses";
import CourseForm from "./components/CourseForm/CourseForm";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import CourseInfo from "./components/Courses/components/CourseInfo/CourseInfo";
import Login from "./components/Courses/components/Login/Login";
import { Navigate } from "react-router-dom";

import {store} from "./store";

function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const isAuthenticated = localStorage.getItem("token");

    return  <>
        <Provider store={store}>
            <Router>
                <Fragment>
                <Routes>
                    <Route path='/registration' element={<Registration/>}/>
                    <Route path='/login' element={loggedIn ? <Navigate to="/courses" /> : <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}  />}/>
                    <Route path='/courses/add' element={loggedIn || isAuthenticated ? <CourseForm /> : <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}/>
                    <Route path="/courses/:id" element={<CourseInfo />} />
                    <Route exact path='/' element={<PrivateRoute/>}>
                        <Route exact path='/courses' element={<Courses/>}/>
                        <Route exact path='/course/add' element={<CreateCourse/>}/>
                        <Route exact path='/course/update/:id' element={<CreateCourse/>}/>
                    </Route>
                </Routes>
                </Fragment>
            </Router>
        </Provider>
        </>
}

export default App;

