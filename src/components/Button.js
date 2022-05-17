function Button(props){

    return(
        <button type="button" onClick={props.clickHandler}>Calculate</button>
    );
}

export default Button;