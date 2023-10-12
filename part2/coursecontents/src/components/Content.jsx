import { Part } from './Part';
import { Total } from './Total';
 
export const Content = ({courseData}) => {
    return(
       <>
       {
       courseData.map(course =>
        <Part key={course.id} partname={course.name} excersises={course.exercises}></Part>
        )
       }
       </>
    )
}