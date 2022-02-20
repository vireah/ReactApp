import {addCourses} from "./store/courses/actionCreators";

// export default const getCourses = async () => {
//     const response = await fetch('http://localhost:3000/courses/all', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });
//
//     const result = await response.json();
//     if(response.ok) {
//         dispatch(addCourses(result.result));
//     }
// }