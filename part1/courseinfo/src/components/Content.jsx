import { Part } from './Part';

export const Content = (props) => {
    return(
       <>
       <Part partno={props.parts[0].name} partexcersizes={props.parts[0].exercises}></Part>
       <Part partno={props.parts[1].name} partexcersizes={props.parts[1].exercises}></Part>
       <Part partno={props.parts[2].name} partexcersizes={props.parts[2].exercises}></Part>
       </>
    )
}