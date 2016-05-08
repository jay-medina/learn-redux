import _ from 'underscore';

export default function runTest({state, action, result, func}) {
  const actual = func(state,action);
  const actual_string = JSON.stringify(actual);
  const action_string = JSON.stringify(action);
  const result_string = JSON.stringify(result);

  if(!_.isEqual(result, actual)) {
    console.log(`\n${func.name}(${state}, ${action_string}) = ${actual_string}
    result = ${result_string} ==> ${_.isEqual(result, actual)}`);
  }
}
