import { Header } from './Header';
import { Content } from './Content';
import { Total } from './Total';
export const Course = ({courses}) => {
    return(
         courses.map(course =>
          <div key={course.id}>
            <Header name={course.name}></Header>
            <Content courseData={course.parts}></Content>
            <Total courseData={course.parts}></Total>
          </div>
         )    
    )
}