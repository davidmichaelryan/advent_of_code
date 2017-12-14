/* eslint-disable no-tabs */

const testFn = require('./test_fn');

let testInput =
  `5 1 9 5
  7 5 3
  2 4 6 8
  `;

const realInput =
  `278	1689	250	1512	1792	1974	175	1639	235	1635	1690	1947	810	224	928	859
  160	50	55	81	68	130	145	21	211	136	119	78	174	155	149	72
  4284	185	4499	273	4750	4620	4779	4669	2333	231	416	1603	197	922	5149	2993
  120	124	104	1015	1467	110	299	320	1516	137	1473	132	1229	1329	1430	392
  257	234	3409	2914	2993	3291	368	284	259	3445	245	1400	3276	339	2207	233
  1259	78	811	99	2295	1628	3264	2616	116	3069	2622	1696	1457	1532	268	82
  868	619	139	522	168	872	176	160	1010	200	974	1008	1139	552	510	1083
  1982	224	3003	234	212	1293	1453	3359	326	3627	3276	3347	1438	2910	248	2512
  4964	527	5108	4742	4282	4561	4070	3540	196	228	3639	4848	152	1174	5005	202
  1381	1480	116	435	980	1022	155	1452	1372	121	128	869	1043	826	1398	137
  2067	2153	622	1479	2405	1134	2160	1057	819	99	106	1628	1538	108	112	1732
  4535	2729	4960	241	4372	3960	248	267	230	5083	827	1843	3488	4762	2294	3932
  3245	190	2249	2812	2620	2743	2209	465	139	2757	203	2832	2454	177	2799	2278
  1308	797	498	791	1312	99	1402	1332	521	1354	1339	101	367	1333	111	92
  149	4140	112	3748	148	815	4261	138	1422	2670	32	334	2029	4750	4472	2010
  114	605	94	136	96	167	553	395	164	159	284	104	530	551	544	18
  `;

console.log('\n\n\n\n ====== PART 1 ====== \n\n\n');
console.log(realInput);

const divideStringBySpaces = input => input.split(/[ 	]{1,}/); // eslint-disable-line no-control-regex

const groupByNewlines = (inputArr) => {
  const groupedArr = [];
  let prevNewLine = 0;
  inputArr.forEach((el, index) => {
    if (el.indexOf('\n') !== -1) {
      inputArr[index] = el.replace('\n', '');
      groupedArr.push(inputArr.slice(prevNewLine, index + 1));
      prevNewLine = index + 1;
    }
  });

  return groupedArr;
};


const getMaxAndMin = (arr) => {
  let max = -1;
  let min = Infinity;
  arr.forEach((el) => {
    const val = parseInt(el, 10);
    if (val < min) {
      min = val;
    }
    if (val > max) {
      max = val;
    }
  });
  return {
    max,
    min,
  };
};


const getDifference = ({ max, min }) => max - min;

const getSum = arr => arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const getChecksum = input => getSum(groupByNewlines(divideStringBySpaces(input)).map(arr =>
  getDifference(getMaxAndMin(arr))));

// testFn(getChecksum, [
//   [testInput, 18],
// ]);
// console.log(divideStringBySpaces(realInput));
// console.log(groupByNewlines(divideStringBySpaces(realInput)));
// groupByNewlines(divideStringBySpaces(realInput)).forEach((arr) => {
//   console.log(`first is: ${arr[0]}, last is ${arr[arr.length - 1]}`);
// });
// console.log(getChecksum(realInput));
// groupByNewlines(divideStringBySpaces(realInput)).forEach(arr => console.log(getMaxAndMin(arr)));
// groupByNewlines(divideStringBySpaces(realInput)).forEach(arr =>
//   console.log(getDifference(getMaxAndMin(arr))));
console.log(getChecksum(realInput));
console.log('\n\n');


console.log('\n\n\n\n ====== PART 2 ====== \n\n\n');
testInput =
  `5 9 2 8
  9 4 7 3
  3 8 6 5
  `;
console.log(realInput);

const findEvenlyDivisible = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    const el = parseInt(arr[i], 10);
    for (let k = 0; k < arr.length; k += 1) {
      if (i !== k) {
        const result = el / parseInt(arr[k], 10);
        if (Number.isInteger(result) && result > 0) {
          return result;
        }
      }
    }
  }
  throw (new Error('No evenly divisible number'));
};

const getEvenChecksum = input => getSum(groupByNewlines(divideStringBySpaces(input)).map(arr =>
  findEvenlyDivisible(arr)));

// console.log(divideStringBySpaces(realInput));
// console.log(groupByNewlines(divideStringBySpaces(realInput)));
// console.log(groupByNewlines(divideStringBySpaces(testInput)).map(arr =>
//   findEvenlyDivisible(arr)));

console.log(getEvenChecksum(realInput));
console.log('\n\n');
