function magnusOperator(leftValue, operator, rightValue) {
  const operations = {
    plus: leftValue + rightValue,
    minus: leftValue - rightValue,
    times: leftValue * rightValue,
    divideBy: Math.floor(leftValue / rightValue),
  };

  return operations[operator];
}

function zero(calc) {
  if (!calc) {
    return 0;
  }
  return magnusOperator(0, calc.op, calc.rightValue);
}
function one(calc) {
  if (!calc) {
    return 1;
  }
  return magnusOperator(1, calc.op, calc.rightValue);
}
function two(calc) {
  if (!calc) {
    return 2;
  }
  return magnusOperator(2, calc.op, calc.rightValue);
}
function three(calc) {
  if (!calc) {
    return 3;
  }
  return magnusOperator(3, calc.op, calc.rightValue);
}
function four(calc) {
  if (!calc) {
    return 4;
  }
  return magnusOperator(4, calc.op, calc.rightValue);
}
function five(calc) {
  if (!calc) {
    return 5;
  }
  return magnusOperator(5, calc.op, calc.rightValue);
}
function six(calc) {
  if (!calc) {
    return 6;
  }
  return magnusOperator(6, calc.op, calc.rightValue);
}
function seven(calc) {
  if (!calc) {
    return 7;
  }
  return magnusOperator(7, calc.op, calc.rightValue);
}
function eight(calc) {
  if (!calc) {
    return 8;
  }
  return magnusOperator(8, calc.op, calc.rightValue);
}
function nine(calc) {
  if (!calc) {
    return 9;
  }
  return magnusOperator(9, calc.op, calc.rightValue);
}

function plus(rightValue) {
  return {
    op: 'plus',
    rightValue,
  };
}
function minus(rightValue) {
  return {
    op: 'minus',
    rightValue,
  };
}
function times(rightValue) {
  return {
    op: 'times',
    rightValue,
  };
}
function dividedBy(rightValue) {
  return {
    op: 'divideBy',
    rightValue,
  };
}
