
const OPERATORS = ['+', '-'];

export const execute = (op, one, two) => {
  switch(op) {
    case '+': return one + two;
    case '-': return one - two;
    case '/': return one / two;
    case '*': return one * two;
  }
  return 0;
};

export const isOperator = (value) => {
  return OPERATORS.includes(value);
};
