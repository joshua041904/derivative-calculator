function Input(props) {
    return(
        <div>
            <label>{props.label}</label>
            <input id={props.id} type="text"></input>
        </div>
    );
}

export default Input;