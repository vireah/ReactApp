import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import Button from "./common/Button/Button";
// import MainContent from "./components/Courses/MainContent";

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
    const [mockedAuthors, setmockedAuthors] = useState([]);
    // const [isAddCourse, setIsAddCourse] = useState(false); addCourse={isAddCourse}

    useEffect(() => {
        setMockedCoursesList(mockedCoursesList)
        setmockedAuthors(mockedAuthorsList)
    }, [] )

    return (
        <div>
            <Header/>
            {/*<MainContent mockedCoursesList={mockedCourses} mockedAuthorsList={mockedAuthors} />*/}
            <Courses mockedCoursesList={mockedCourses} setMockedCourses={setMockedCoursesList} mockedAuthorsList={mockedAuthors} setmockedAuthors={setmockedAuthors} />
            {/*<Button onClick={() => setIsAddCourse(true)} title = 'Add new course' />*/}
        </div>
    )
}
export default App;
