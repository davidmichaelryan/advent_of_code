const testFn = require('./test_fn');

const testInputs = [
  [1, 0],

  [12, 3],

  [23, 2],

  [49, 6],

  [1024, 31],
];

const nextOddSquareRoot = num =>
  (2 * Math.floor(Math.ceil(Math.sqrt(num)) / 2)) + 1;

const getMemoryGridDistance = (num) => {
  const gridDimensions = nextOddSquareRoot(num);
  const spiralMax = gridDimensions * gridDimensions;
  const spiralMin = ((gridDimensions - 2) ** 2);

  const midpoint = Math.floor(gridDimensions / 2);
  const sideMultiple = gridDimensions - 1;
  const stepsAlong = num === spiralMax ? sideMultiple : (num - spiralMin) % sideMultiple;

  const stepsFromSideCenter = Math.abs(midpoint - stepsAlong);

  // find a better way to do this
  let stepsFromTrueCenter = 0;

  for (let i = 1; i <= gridDimensions; i += 2) {
    if (i ** 2 >= num) {
      stepsFromTrueCenter = (i - 1) / 2;
      break;
    }
  }

  return stepsFromSideCenter + stepsFromTrueCenter;
};

testFn(getMemoryGridDistance, testInputs);

console.log(getMemoryGridDistance(312051));

/*

65  64  63  62  61  60  59  58  57
66  37  36  35  34  33  32  31  56
67  38  17  16  15  14  13  30  55
68  39  18   5   4   3  12  29  54
69  40  19   6   1   2  11  28  53
70  41  20   7   8   9  10  27  52
71  42  21  22  23  24  25  26  51
72  43  44  45  46  47  48  49  50
73  74  75  76  77  78  79  80  81

    37  36  35  34  33  32  31
    38  17  16  15  14  13  30
    39  18   5   4   3  12  29
    40  19   6   1   2  11  28
    41  20   7   8   9  10  27
    42  21  22  23  24  25  26
    43  44  45  46  47  48  49

        17  16  15  14  13
        18   5   4   3  12
        19   6   1   2  11
        20   7   8   9  10
        21  22  23  24  25

            5   4   3
            6   1   2
            7   8   9
*/
