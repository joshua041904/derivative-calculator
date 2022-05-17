function Answer(props) {

    // TODO: create useEffect method

    return (
        <div className="derivative-answer">
          <h2>{props.label}</h2>
          <p>{props.answer}</p>
        </div>
    );
  }
  
  export default Answer;