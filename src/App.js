import Input from "./components/Input";
import Button from "./components/Button";

import { Container, Content, Row } from "./styles";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");

  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === "0" ? "" : prev}${num}`);
  };

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMinusNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleDivNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleMultNumber = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  };

  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0") {
      switch (operation) {
        case "+":
          handleSumNumbers();
          break;
        case "-":
          handleMinusNumber();
          break;
        case "*":
          handleMultNumber();
          break;
        case "/":
          handleDivNumber();
          break;
        default:
          break;
      }
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label={"Clear"} onClick={handleOnClear} />
          <Button label={"."} onClick={() => handleAddNumber(".")} />
          <Button label={"/"} onClick={handleDivNumber} />
          <Button label={"*"} onClick={handleMultNumber} />
        </Row>
        <Row>
          <Button label={7} onClick={() => handleAddNumber("7")} />
          <Button label={8} onClick={() => handleAddNumber("8")} />
          <Button label={9} onClick={() => handleAddNumber("9")} />
          <Button label={"-"} onClick={handleMinusNumber} />
        </Row>
        <Row>
          <Button label={4} onClick={() => handleAddNumber("4")} />
          <Button label={5} onClick={() => handleAddNumber("5")} />
          <Button label={6} onClick={() => handleAddNumber("6")} />
          <Button label={"+"} onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label={1} onClick={() => handleAddNumber("1")} />
          <Button label={2} onClick={() => handleAddNumber("2")} />
          <Button label={3} onClick={() => handleAddNumber("3")} />
          <Button label={"="} onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
