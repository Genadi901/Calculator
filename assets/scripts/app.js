const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserInput() {
  return parseInt(usrInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDesc = `${resultBeforeCalc} ${operator}  ${calcNumber}`;
  outputResult(currentResult, calcDesc);
}

function writeToLog(operation, prevResult, opNum, newResult) {
  const logEntry = {
    operationIdentifier: operation,
    prevResult: prevResult,
    number: opNum,
    result: newResult,
  };

  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculate(operation) {
  const enteredNum = getUserInput();
  const initialResult = currentResult;
  let operator;
  if (operation === "add") {
    currentResult += enteredNum;
    operator = "+";
  } else if (operation === "subtract") {
    currentResult -= enteredNum;
    operator = "-";
  } else if (operation === "multiply") {
    currentResult *= enteredNum;
    opperator = "*";
  } else {
    operation === "divide";
    currentResult /= enteredNum;
    operator = "/";
  }

  createAndWriteOutput(operator, initialResult, enteredNum);
  writeToLog(operation, initialResult, enteredNum, currentResult);
}

addBtn.addEventListener("click", operator.bind(this,"add"));
subtractBtn.addEventListener("click", operator.bind(this,"subtract"));
multiplyBtn.addEventListener("click", operator.bind(this,"multiply"));
divideBtn.addEventListener("click", operator.bind(this,"divide"));
