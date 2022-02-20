import React, {useState, useEffect, createContext } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Registration from "./components/Courses/components/Registration/Registration";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import CourseInfo from "./components/Courses/components/CourseInfo/CourseInfo";
import Login from "./components/Courses/components/Login/Login";
import { Navigate } from "react-router-dom";
import { createStore } from 'redux'
import coursesReducer from "./store/courses/reducer";
import authorsReducer from "./store/courses/reducer";
import userReducer from "./store/courses/reducer";
import { combineReducers } from 'redux'
import CourseCard from "./components/Courses/components/CourseCard/CourseCard";


// export default combineReducers(reducer)
export const rootReducer = combineReducers({ courses: coursesReducer, authors: authorsReducer, user: userReducer})

export const store = createStore(rootReducer);
export const CoursesContext = createContext('');

console.log(store.getState(),'oh')
// [ 'Use Redux', 'Read the docs' ]
const mockedCoursesList = [
    {
        id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
        title: 'JavaScript',
        description: `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum 
 has been the industry's standard dummy text ever since the
1500s, when an unknown 
 printer took a galley of type and scrambled it to make a type
specimen book. It has survived 
 not only five centuries, but also the leap into electronic
COMPONENTS.md 1/4/2022
3 / 11
typesetting, remaining essentially u
 nchanged.`,
        creationDate: '8/3/2021',
        duration: 160,
        authors: ['27cc3006-e93a-4748-8ca8-73d06aa93b6d', 'f762978b-61eb-4096-812bebde22838167'],
    },
    {
        id: 'b5630fdd-7bf7-4d39-b75a-2b5906fd0916',
        title: 'Angular',
        description: `Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum 
 has been the industry's standard dummy text ever since the
1500s, when an unknown 
 printer took a galley of type and scrambled it to make a type
specimen book.`,
        creationDate: '10/11/2020',
        duration: 210,
        authors: ['df32994e-b23d-497c-9e4d-84e4dc02882f', '095a1817-d45b-4ed7-9cf7-b2417bcbf748'],
    },
]

const mockedAuthorsList = [
    {
        id: '27cc3006-e93a-4748-8ca8-73d06aa93b6d',
        name: 'Vasiliy Dobkin'
    },
    {
        id: 'f762978b-61eb-4096-812b-ebde22838167',
        name: 'Nicolas Kim'
    },
    {
        id: 'df32994e-b23d-497c-9e4d-84e4dc02882f',
        name: 'Anna Sidorenko'
    },
    {
        id: '095a1817-d45b-4ed7-9cf7-b2417bcbf748',
        name: 'Valentina Larina'
    },
]

function App() {
    const [mockedCourses, setMockedCoursesList] = useState([]);
    const [mockedAuthors, setMockedAuthors] = useState([]);

    const [loggedIn, setLoggedIn] = useState(false)
    const isAuthenticated = localStorage.getItem("isAuthenticated");

    // useEffect(() => {
    //     setMockedCoursesList(mockedCoursesList)
    //     setMockedAuthors(mockedAuthorsList)
    // }, [] )

    return  <CoursesContext.Provider value={{ mockedCourses: [mockedCourses, setMockedCoursesList], mockedAuthors: [mockedAuthors, setMockedAuthors] }}>
                <Router>
                    <Routes>
                        <Route path='/registration' element={<Registration/>}/>
                        <Route path='/login' element={loggedIn ? <Navigate to="/courses" /> : <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn}  />}/>
                        <Route path='/courses' element={ loggedIn || isAuthenticated ? <Courses loggedIn={loggedIn} setLoggedIn={setLoggedIn}/> : <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}/>
                        <Route path='/courses/add' element={loggedIn || isAuthenticated ? <CreateCourse /> : <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}/>
                        />

                        <Route path="/courses/:id" element={<CourseInfo />} />

                    </Routes>
                </Router>
            </CoursesContext.Provider>
}

export default App;

