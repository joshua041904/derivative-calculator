import './App.css';
import Title from './components/Title';
import Input from './components/Input';
import Button from './components/Button';
import Answer from './components/Answer';
import { useState } from 'react';
import { create, all } from 'mathjs';

const math = create(all);

function App() {
  let [derivative, setDerivative] = useState("");

  const print = (value) => {
    const precision = 14
    return math.format(value, precision);
  }

  const findDerivative = () => {
    const expr = document.getElementById('function').value;
    const variable = document.getElementById('variable').value;
    const result = math.derivative(expr, variable);
    setDerivative(print(result));
}

  return (
    <div className="App">
      <Title name="Derivative Calculator" />
      <Input id="function" label="Enter Function" />
      <Input id="variable" label="Enter Variable" />
      <Button clickHandler={findDerivative} />

      <div className="Answer">
      <Answer label="Derivative Result" answer={derivative} />
      </div>



      <footer className="App-footer">

      <hr></hr>
      <h4>Instructions</h4>
      <p>*Type function into textbox labelled "Enter Function"</p>
      <p>*For <strong>exponents</strong> use ^ symbol</p>
      <p>*For <strong>fractional exponents</strong> use parenthesis; i.e. x^(2/3)</p>
      <p>*For <strong>square roots</strong>, write like this: sqrt()</p>
      <p>*For a <strong>trig function with exponent</strong> like cos<sup>2</sup>(x), you must type it like cos(x)^2</p>
      <p>*Type variable being used in function into textbox labelled "Enter Variable"</p>

      </footer>

    </div>
  );
}

export default App;
