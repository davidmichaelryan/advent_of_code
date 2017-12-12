const testFn = (fn, testArgs) => {
  console.log('testing inputs: ');
  testArgs.forEach((args) => {
    const [arg, expected] = args;
    const actual = fn(arg);

    const result = expected === actual ? '✓' : 'X';

    console.log(`#    ${actual} ${result}`);
  });
};

module.exports = { testFn };
