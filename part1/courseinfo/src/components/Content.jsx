import { Part } from './Part';

export const Content = (props) => {
    return(
       <>
       <Part partno={props.part1} partexcersizes={props.exercises1}></Part>
       <Part partno={props.part2} partexcersizes={props.exercises2}></Part>
       <Part partno={props.part3} partexcersizes={props.exercises3}></Part>
       </>
    )
}