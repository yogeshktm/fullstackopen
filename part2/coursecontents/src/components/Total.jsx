export const Total = ({courseData}) => {
    console.log('In total',courseData);
    let exercisesArray  = [];
    let exercisesData = courseData.map(function(parts){
        exercisesArray.push(parts.exercises);
    })
    console.log(exercisesArray);
    let total = exercisesArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(total);
    return(
        <strong>Total of {parseInt(total)} exercises</strong>
    )
}