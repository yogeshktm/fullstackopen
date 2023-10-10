export const Button = ({btnText,handleClick}) => {
    return(
        <button onClick={handleClick}>{btnText}</button>
    )
}